import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
import { CASES_DATABASE } from "@/data/cases";

type AppState = {
  user: User | null;
  isPremium: boolean;
  selectedBlockId: string | null;
  view: "home" | "game";
  playsToday: number;
  showPremiumDialog: boolean;
  authLoading: boolean;
  setSelectedBlockId: (id: string) => void;
  startGame: () => void;
  goHome: () => void;
  incrementPlay: () => void;
  loginGoogle: () => void;
  logout: () => void;
  setShowPremiumDialog: (v: boolean) => void;
};

const AppContext = createContext<AppState | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isPremium, setIsPremium] = useState(false);
  const [selectedBlockId, setSelectedBlockIdState] = useState<string | null>(null);
  const [view, setView] = useState<"home" | "game">("home");
  const [playsToday, setPlaysToday] = useState(0);
  const [showPremiumDialog, setShowPremiumDialog] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);

  const fetchPremium = async (uid: string) => {
    try {
      const { data } = await supabase
        .from("profiles")
        .select("is_premium")
        .eq("id", uid)
        .single();
      setIsPremium(data?.is_premium === true);
    } catch {
      setIsPremium(false);
    }
  };

  useEffect(() => {
    // Freemium daily quota logic
    const today = new Date().toISOString().split("T")[0];
    const storedDate = localStorage.getItem("tk_date");
    const storedPlayed = parseInt(localStorage.getItem("tk_played") || "0");

    if (storedDate !== today) {
      localStorage.setItem("tk_date", today);
      localStorage.setItem("tk_played", "0");
      setPlaysToday(0);
    } else {
      setPlaysToday(storedPlayed);
    }

    // FIX #4: Added .catch() so authLoading never stays true forever
    // if Supabase is unreachable or request times out.
    supabase.auth
      .getSession()
      .then(({ data: { session } }) => {
        const u = session?.user ?? null;
        setUser(u);
        if (u) fetchPremium(u.id);
      })
      .catch(() => {
        // Network error or Supabase down — gracefully degrade to logged-out state
        setUser(null);
        setIsPremium(false);
      })
      .finally(() => {
        setAuthLoading(false);
      });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        const u = session?.user ?? null;
        setUser(u);
        if (u) {
          fetchPremium(u.id);
        } else {
          setIsPremium(false);
        }
        setAuthLoading(false);
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  const incrementPlay = () => {
    const newCount = playsToday + 1;
    setPlaysToday(newCount);
    localStorage.setItem("tk_played", String(newCount));
  };

  const startGame = () => {
    if (playsToday >= 5 && !isPremium) {
      setShowPremiumDialog(true);
      return;
    }
    setView("game");
  };

  const goHome = () => {
    setView("home");
    setSelectedBlockIdState(null);
  };

  // FIX #3: Removed hardcoded Replit URL.
  // Now uses window.location.origin so OAuth redirect works on any domain.
  const loginGoogle = async () => {
    const redirectTo = window.location.origin + "/";

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo,
        skipBrowserRedirect: true,
      },
    });

    if (error) {
      console.error("OAuth error:", error.message);
      return;
    }

    if (data?.url) {
      const newTab = window.open(data.url, "_blank");
      if (!newTab) {
        // Fallback if popup blocked
        window.location.href = data.url;
      }
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setIsPremium(false);
  };

  const blocksWithQuestions = Object.keys(CASES_DATABASE).filter(
    (k) => CASES_DATABASE[k] && CASES_DATABASE[k].length > 0
  );

  const setSelectedBlockId = (id: string) => {
    if (id === "random") {
      setSelectedBlockIdState("random");
      return;
    }
    if (!blocksWithQuestions.includes(id)) return;
    setSelectedBlockIdState(id);
  };

  return (
    <AppContext.Provider
      value={{
        user,
        isPremium,
        selectedBlockId,
        view,
        playsToday,
        showPremiumDialog,
        authLoading,
        setSelectedBlockId,
        startGame,
        goHome,
        incrementPlay,
        loginGoogle,
        logout,
        setShowPremiumDialog,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
