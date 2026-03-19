import { Toaster } from "sonner";
import { AppProvider, useApp } from "@/context/AppContext";
import Navbar from "@/components/Navbar";
import HomeView from "@/components/HomeView";
import GameView from "@/components/GameView";
import PremiumDialog from "@/components/PremiumDialog";

function AppContent() {
  const { view, authLoading } = useApp();

  if (authLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-slate-500 font-medium">Memuat aplikasi...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="max-w-lg mx-auto px-4 py-6">
        {view === "home" && <HomeView />}
        {view === "game" && <GameView />}
      </main>
      <PremiumDialog />
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
