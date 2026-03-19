import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { useApp } from "@/context/AppContext";
import { CASES_DATABASE, BLOCKS, type Question } from "@/data/cases";
import { Button } from "@/components/ui/button";

const OPTION_LABELS = ["A", "B", "C", "D", "E"];

type ShuffledQuestion = Question & {
  // The shuffled options array and the new index of the correct answer
  shuffledOptions: string[];
  shuffledAnswerIndex: number;
};

type GameState = {
  question: ShuffledQuestion;
  hintsVisible: number;
  attemptsLeft: number;
  selectedOptions: Record<number, "wrong" | "correct">;
  gameOver: boolean;
  won: boolean;
};

// FIX MINOR #4: Shuffle options so the correct answer is distributed across
// all positions (A–E), preventing the B/C bias that existed in the raw data.
function shuffleOptions(question: Question): ShuffledQuestion {
  const indices = [0, 1, 2, 3, 4];
  // Fisher-Yates shuffle on the index array
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  const shuffledOptions = indices.map((i) => question.options[i]);
  const shuffledAnswerIndex = indices.indexOf(question.answerIndex);
  return { ...question, shuffledOptions, shuffledAnswerIndex };
}

function pickQuestion(
  blockId: string
): { question: ShuffledQuestion; resolvedBlockId: string } | null {
  const blocksWithQuestions = Object.keys(CASES_DATABASE).filter(
    (k) => CASES_DATABASE[k] && CASES_DATABASE[k].length > 0
  );

  let resolvedBlockId = blockId;
  if (blockId === "random") {
    resolvedBlockId =
      blocksWithQuestions[
        Math.floor(Math.random() * blocksWithQuestions.length)
      ];
  }

  const questions = CASES_DATABASE[resolvedBlockId];
  if (!questions || questions.length === 0) return null;

  const raw = questions[Math.floor(Math.random() * questions.length)];
  return { question: shuffleOptions(raw), resolvedBlockId };
}

function freshState(question: ShuffledQuestion): GameState {
  return {
    question,
    hintsVisible: 1,
    attemptsLeft: 5,
    selectedOptions: {},
    gameOver: false,
    won: false,
  };
}

export default function GameView() {
  // FIX #1: Pull isPremium, playsToday, setShowPremiumDialog so handleNext
  // can enforce the premium gate (previously missing — free users could bypass
  // the daily limit entirely by clicking "Soal Berikutnya").
  const {
    selectedBlockId,
    goHome,
    incrementPlay,
    isPremium,
    playsToday,
    setShowPremiumDialog,
  } = useApp();

  const [resolvedBlockId, setResolvedBlockId] = useState<string>("");
  const [blockDisplayName, setBlockDisplayName] = useState("");
  const [state, setState] = useState<GameState | null>(null);

  // FIX MINOR #2: Use refs to hold the latest callback values so the
  // loadNewQuestion function doesn't capture stale closures.
  // Previously useCallback(fn, []) was used with eslint-disable suppression.
  const goHomeRef = useRef(goHome);
  const incrementPlayRef = useRef(incrementPlay);
  useEffect(() => {
    goHomeRef.current = goHome;
    incrementPlayRef.current = incrementPlay;
  });

  const loadNewQuestion = (bId: string) => {
    const result = pickQuestion(bId);
    if (!result) {
      toast.info("Soal untuk blok ini sedang disusun 📝");
      goHomeRef.current();
      return;
    }
    const { question, resolvedBlockId: actualBlockId } = result;
    setResolvedBlockId(actualBlockId);

    const block = BLOCKS.find((b) => b.id === actualBlockId);
    setBlockDisplayName(block ? `${block.icon} ${block.name}` : actualBlockId);

    setState(freshState(question));
  };

  // Initial question load — runs once on mount
  useEffect(() => {
    if (!selectedBlockId) {
      goHomeRef.current();
      return;
    }
    loadNewQuestion(selectedBlockId);
    incrementPlayRef.current();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOptionClick = (index: number) => {
    if (!state) return;
    if (state.gameOver || state.selectedOptions[index] !== undefined) return;

    const correctIdx = state.question.shuffledAnswerIndex;

    if (index === correctIdx) {
      setState((prev) =>
        prev
          ? {
              ...prev,
              selectedOptions: { ...prev.selectedOptions, [index]: "correct" },
              gameOver: true,
              won: true,
              hintsVisible: 5,
            }
          : prev
      );
    } else {
      const newAttempts = state.attemptsLeft - 1;
      const isLose = newAttempts === 0;

      setState((prev) => {
        if (!prev) return prev;
        const newOpts: Record<number, "wrong" | "correct"> = {
          ...prev.selectedOptions,
          [index]: "wrong",
        };
        if (isLose) {
          newOpts[prev.question.shuffledAnswerIndex] = "correct";
        }
        return {
          ...prev,
          selectedOptions: newOpts,
          attemptsLeft: newAttempts,
          hintsVisible: isLose ? 5 : Math.min(prev.hintsVisible + 1, 5),
          gameOver: isLose,
          won: false,
        };
      });
    }
  };

  // FIX #1: handleNext now checks the freemium gate before proceeding.
  // Previously it called incrementPlay() unconditionally, letting free users
  // bypass the daily 5-play limit after entering the game screen once.
  const handleNext = () => {
    if (playsToday >= 5 && !isPremium) {
      setShowPremiumDialog(true);
      return;
    }
    const targetBlock = selectedBlockId ?? resolvedBlockId;
    incrementPlayRef.current();
    loadNewQuestion(targetBlock);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!state) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const {
    question,
    hintsVisible,
    attemptsLeft,
    selectedOptions,
    gameOver,
    won,
  } = state;
  const lostDots = 5 - attemptsLeft;

  return (
    <div className="space-y-5 pb-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={goHome}
          className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-700 transition-colors"
        >
          ← Kembali
        </button>
        <span className="text-sm font-semibold text-slate-700">
          {blockDisplayName}
        </span>
      </div>

      {/* Attempt Dots */}
      <div className="space-y-1.5">
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
          Percobaan Tersisa
        </p>
        <div className="flex gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className={[
                "w-6 h-6 rounded-full transition-all duration-300",
                i < lostDots ? "bg-red-500 scale-90" : "bg-blue-500",
              ].join(" ")}
            />
          ))}
        </div>
      </div>

      {/* Mystery Box / Vignette */}
      {!gameOver ? (
        <div className="border-2 border-dashed border-slate-300 bg-slate-50 rounded-xl p-5 text-center">
          <span className="text-3xl">🔍</span>
          <p className="mt-2 text-sm font-semibold text-slate-600">
            Vignette disembunyikan.
          </p>
          <p className="text-xs text-slate-400 mt-1">
            Analisis dari petunjuk di bawah.
          </p>
        </div>
      ) : (
        <div className="border border-blue-200 bg-blue-50 rounded-xl p-4 animate-in fade-in duration-300">
          <p className="text-xs font-semibold text-blue-600 mb-2 uppercase tracking-wide">
            📋 Vignette Pasien
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            {question.vignette}
          </p>
        </div>
      )}

      {/* Hints */}
      <div className="space-y-2">
        <p className="text-sm font-bold text-slate-700">💡 Petunjuk Klinis</p>
        <div className="space-y-2">
          {question.hints.map((hint, i) => {
            const visible = i < hintsVisible;
            return visible ? (
              <div
                key={i}
                className="border-l-4 border-amber-400 bg-amber-50 rounded-r-lg px-3 py-2 animate-in fade-in duration-200"
              >
                <p className="text-xs text-slate-400 font-medium mb-0.5">
                  Petunjuk {i + 1}
                </p>
                <p className="text-sm text-slate-700">{hint}</p>
              </div>
            ) : (
              <div
                key={i}
                className="border border-dashed border-slate-200 bg-slate-100 rounded-lg px-3 py-2"
              >
                <p className="text-sm text-slate-400">
                  🔒 Petunjuk {i + 1} — Terkunci
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Options — use shuffledOptions and shuffledAnswerIndex */}
      <div className="space-y-2">
        <p className="text-sm font-bold text-slate-700">🩺 Pilihan Jawaban</p>
        <div className="space-y-2">
          {question.shuffledOptions.map((option, i) => {
            const optState = selectedOptions[i];
            const isCorrect = optState === "correct";
            const isWrong = optState === "wrong";
            const isDisabledByGame = gameOver && optState === undefined;

            return (
              <button
                key={i}
                onClick={() => handleOptionClick(i)}
                disabled={!!optState || isDisabledByGame}
                className={[
                  "w-full text-left px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all",
                  isCorrect
                    ? "bg-green-100 border-green-400 text-green-700 cursor-default"
                    : isWrong
                      ? "bg-red-100 border-red-400 text-red-700 cursor-default opacity-70"
                      : isDisabledByGame
                        ? "bg-white border-slate-200 text-slate-400 cursor-default opacity-50"
                        : "bg-white border-slate-200 hover:border-blue-400 hover:bg-blue-50 cursor-pointer active:scale-[0.99]",
                ].join(" ")}
              >
                <span className="font-bold mr-2">{OPTION_LABELS[i]}.</span>
                {option}
              </button>
            );
          })}
        </div>
      </div>

      {/* Feedback */}
      {gameOver && (
        <div
          className={[
            "rounded-xl border p-4 animate-in fade-in duration-300",
            won ? "bg-green-50 border-green-300" : "bg-red-50 border-red-300",
          ].join(" ")}
        >
          <p
            className={`font-bold text-sm mb-2 ${won ? "text-green-700" : "text-red-700"}`}
          >
            {won ? "✅ Tepat! Diagnosis Benar." : "❌ Belum Tepat."}
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            {question.explanation}
          </p>
        </div>
      )}

      {/* Action Buttons */}
      {gameOver && (
        <div className="flex flex-col gap-2">
          <Button
            className="w-full h-11 text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
            onClick={handleNext}
          >
            Soal Berikutnya →
          </Button>
          <Button
            variant="outline"
            className="w-full h-11 text-sm font-medium"
            onClick={goHome}
          >
            ← Kembali ke Menu Utama
          </Button>
        </div>
      )}
    </div>
  );
}
