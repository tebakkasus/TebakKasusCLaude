# TebakKasus — Bug Fix Changelog

## Versi: Fixed Build (dari tebakkasus-project_2.zip)

---

### 🔴 CRITICAL #1 — Premium Bypass di `handleNext()` [GameView.tsx]

**Masalah:** Free user bisa memainkan soal tak terbatas setelah masuk GameView.
Gate premium hanya aktif di `startGame()`, tapi `handleNext()` langsung
memanggil `incrementPlay()` tanpa cek `isPremium` atau `playsToday ≥ 5`.

**Fix:** Tambah `isPremium`, `playsToday`, `setShowPremiumDialog` ke
destructure dari `useApp()`. Tambah guard di awal `handleNext()`:
```ts
if (playsToday >= 5 && !isPremium) {
  setShowPremiumDialog(true);
  return;
}
```

---

### 🔴 CRITICAL #2 — `vite.config.ts` Hanya Bisa Jalan di Replit [vite.config.ts]

**Masalah:** Config melempar `Error` jika `PORT` atau `BASE_PATH` tidak ada.
Crash di Vercel, Netlify, atau `npm run dev` lokal.

**Fix:** Ubah ke optional dengan default:
```ts
const port = Number(process.env.PORT) || 5173;
const basePath = process.env.BASE_PATH || "/";
```
Plugin Replit dihapus dari config (tidak dibutuhkan di luar Replit).

---

### 🔴 CRITICAL #3 — Hardcoded URL Replit di `loginGoogle()` [AppContext.tsx]

**Masalah:** OAuth redirect URL hardcoded ke domain `janeway.replit.dev/...`.
Login Google gagal atau redirect ke app yang salah di domain lain.

**Fix:** Ubah ke dinamis:
```ts
const redirectTo = window.location.origin + "/";
```

---

### 🔴 CRITICAL #4 — `getSession()` Tanpa `.catch()` [AppContext.tsx]

**Masalah:** Jika Supabase timeout/down, `setAuthLoading(false)` tidak pernah
dipanggil → app stuck di spinner "Memuat aplikasi..." selamanya.

**Fix:** Tambah `.catch()` dan `.finally()`:
```ts
supabase.auth.getSession()
  .then(...)
  .catch(() => { setUser(null); setIsPremium(false); })
  .finally(() => setAuthLoading(false));
```

---

### 🟡 MINOR #2 — Stale Closure di `useCallback(fn, [])` [GameView.tsx]

**Masalah:** `loadNewQuestion` dibuat dengan deps `[]`, membuat `incrementPlay`
dan `goHome` stale. Diakali dengan `// eslint-disable-next-line`.

**Fix:** Gunakan `useRef` untuk menyimpan fungsi terbaru:
```ts
const goHomeRef = useRef(goHome);
const incrementPlayRef = useRef(incrementPlay);
useEffect(() => {
  goHomeRef.current = goHome;
  incrementPlayRef.current = incrementPlay;
});
```

---

### 🟡 MINOR #4 — Bias Jawaban: B+C = 87%, Opsi E Tidak Pernah Benar [GameView.tsx]

**Masalah:** Dari 60 soal di data: B benar 24x (40%), C benar 28x (47%),
E tidak pernah benar (0%). Siswa bisa "tebak B atau C" dan benar 87%.

**Fix:** Tambah fungsi `shuffleOptions()` di `pickQuestion()` yang mengacak
urutan opsi setiap soal baru dimuat, lalu menyesuaikan `shuffledAnswerIndex`.
Jawaban benar tetap sama, tapi posisinya berubah setiap sesi.

---

### 🟡 MINOR #5 — Tidak Ada Seleksi Block + Tombol "Mulai" [HomeView.tsx]

**Masalah:** Klik blok langsung masuk game. Tidak ada visual selection state
dan tidak ada tombol "Mulai Sesi Pemeriksaan" terpisah seperti di spec.

**Fix:** 
- Klik blok sekarang hanya *memilih* blok (highlight `ring-2 ring-blue-500`)
- Tombol "Mulai Sesi Pemeriksaan" ditambah di bawah grid, disabled jika belum pilih blok

---

### 🟡 MINOR — `tsconfig.json` Monorepo-Specific

**Masalah:** `extends: "../../tsconfig.base.json"` dan `references` ke
`../../lib/api-client-react` tidak ada di luar Replit monorepo.

**Fix:** Ubah tsconfig.json ke standalone yang bisa berdiri sendiri.

---

### 🟡 MINOR — `package.json` Cleanup

**Masalah:** `firebase ^12.10.0` ada di dependencies tapi tidak digunakan sama sekali.
Nama package `@workspace/tebakkasus` bersifat Replit-specific.

**Fix:** Hapus `firebase` dari dependencies, fix nama ke `tebakkasus`,
hapus Replit-specific devDependencies, fix scripts agar portable.
