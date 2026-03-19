import { useApp } from "@/context/AppContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function PremiumDialog() {
  const { showPremiumDialog, setShowPremiumDialog } = useApp();

  return (
    <Dialog open={showPremiumDialog} onOpenChange={setShowPremiumDialog}>
      <DialogContent className="max-w-sm mx-auto">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold text-slate-800">
            🔒 Limit Harian Tercapai
          </DialogTitle>
          <DialogDescription className="text-sm text-slate-600 mt-1">
            Kamu telah menyelesaikan 5 kasus gratis hari ini. Buka akses tak
            terbatas dan latih lebih banyak kasus UKMPPD.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-3 space-y-2">
          <div className="bg-slate-50 rounded-lg p-4 space-y-2">
            <p className="text-sm font-medium text-slate-700 mb-3">
              Keuntungan Premium:
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span className="text-green-500">✅</span>
              Kasus tak terbatas setiap hari
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span className="text-green-500">✅</span>
              Akses semua 18 blok spesialisasi
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span className="text-green-500">✅</span>
              Sinkronisasi progres via akun
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <Button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
            onClick={() => {
              window.open(
                "https://checkout-staging.xendit.co/od/TebakKasusVIP",
                "_blank"
              );
            }}
          >
            👑 Daftar Premium — Rp39k/Bulan
          </Button>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => setShowPremiumDialog(false)}
          >
            Nanti Saja
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
