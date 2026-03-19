import { useApp } from "@/context/AppContext";
import { BLOCKS, CASES_DATABASE } from "@/data/cases";
import { Button } from "@/components/ui/button";

export default function HomeView() {
  // FIX MINOR #5: Pull selectedBlockId from context so we can show
  // which block is currently selected (highlight state).
  const {
    startGame,
    setSelectedBlockId,
    selectedBlockId,
    playsToday,
    isPremium,
  } = useApp();

  const blocksWithQuestions = new Set(
    Object.keys(CASES_DATABASE).filter(
      (k) => CASES_DATABASE[k] && CASES_DATABASE[k].length > 0
    )
  );

  const isBlockAvailable = (id: string) => {
    if (id === "random") return true;
    return blocksWithQuestions.has(id);
  };

  // FIX MINOR #5: Clicking a block now only *selects* it.
  // The user then presses "Mulai Sesi Pemeriksaan" to start,
  // matching the original spec requirement.
  const handleBlockClick = (id: string) => {
    if (!isBlockAvailable(id)) return;
    setSelectedBlockId(id);
  };

  const handleStart = () => {
    if (!selectedBlockId) return;
    startGame();
  };

  const remaining = Math.max(0, 5 - playsToday);

  return (
    <div className="space-y-5">
      {/* Hero */}
      <div className="text-center pt-2 pb-1">
        <h1 className="text-2xl font-extrabold text-slate-800 leading-tight">
          Kuasai Diagnosis Klinis
        </h1>
        <p className="mt-2 text-sm text-slate-500 max-w-xs mx-auto">
          Pilih blok spesialisasi dan jawab skenario pasien bertahap untuk
          persiapan UKMPPD.
        </p>
        {!isPremium && (
          <p
            className={`mt-2 text-xs font-medium ${
              remaining > 0 ? "text-blue-500" : "text-red-500"
            }`}
          >
            {remaining > 0
              ? `${remaining} soal gratis tersisa hari ini`
              : "Limit harian tercapai — upgrade untuk lanjut"}
          </p>
        )}
      </div>

      {/* Block Grid — FIX MINOR #5: selected block gets ring-2 ring-blue-500 */}
      <div className="grid grid-cols-2 gap-3">
        {BLOCKS.map((block) => {
          const available = isBlockAvailable(block.id);
          const isSelected = selectedBlockId === block.id;
          const questionCount =
            block.id === "random"
              ? Object.values(CASES_DATABASE).reduce((a, b) => a + b.length, 0)
              : (CASES_DATABASE[block.id]?.length ?? 0);

          return (
            <button
              key={block.id}
              onClick={() => handleBlockClick(block.id)}
              disabled={!available}
              className={[
                "flex items-center gap-3 p-3.5 rounded-xl border-2 text-left transition-all active:scale-[0.97]",
                available
                  ? isSelected
                    ? "bg-blue-50 border-blue-500 ring-2 ring-blue-400 ring-offset-1 cursor-pointer shadow-sm"
                    : "bg-white border-slate-200 hover:border-blue-400 hover:bg-blue-50/60 cursor-pointer"
                  : "bg-slate-50 border-slate-100 opacity-40 cursor-not-allowed",
              ].join(" ")}
            >
              <span className="text-2xl leading-none flex-shrink-0">
                {block.icon}
              </span>
              <div className="min-w-0">
                <p
                  className={`text-sm font-semibold leading-tight ${
                    isSelected ? "text-blue-700" : "text-slate-700"
                  }`}
                >
                  {block.name}
                </p>
                {available && block.id !== "random" && (
                  <p className="text-xs text-slate-400 mt-0.5">
                    {questionCount} soal
                  </p>
                )}
                {block.id === "random" && (
                  <p className="text-xs text-slate-400 mt-0.5">
                    {questionCount} soal campuran
                  </p>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* FIX MINOR #5: Dedicated "Mulai Sesi Pemeriksaan" button per spec */}
      <div className="pt-1">
        <Button
          onClick={handleStart}
          disabled={!selectedBlockId}
          className="w-full h-12 text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-xl disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          {selectedBlockId
            ? `Mulai Sesi Pemeriksaan →`
            : "Pilih Blok Terlebih Dahulu"}
        </Button>
        {selectedBlockId && (
          <p className="text-center text-xs text-slate-400 mt-2">
            Blok terpilih:{" "}
            <span className="font-semibold text-blue-600">
              {BLOCKS.find((b) => b.id === selectedBlockId)?.name}
            </span>
          </p>
        )}
      </div>
    </div>
  );
}
