export type Question = {
  vignette: string;
  hints: string[];
  options: string[];
  answerIndex: number;
  explanation: string;
};

export type Block = {
  id: string;
  name: string;
  icon: string;
};

export const BLOCKS: Block[] = [
  { id: 'ipd',      name: 'Penyakit Dalam',   icon: '🫀' },
  { id: 'peds',     name: 'Pediatri',          icon: '👶' },
  { id: 'surg',     name: 'Bedah Umum',        icon: '🔪' },
  { id: 'obgyn',    name: 'Obgyn',             icon: '🤰' },
  { id: 'neuro',    name: 'Neurologi',         icon: '🧠' },
  { id: 'cardio',   name: 'Kardiologi',        icon: '❤️' },
  { id: 'pulmo',    name: 'Pulmonologi',       icon: '🫁' },
  { id: 'ortho',    name: 'Ortopedi',          icon: '🦴' },
  { id: 'derma',    name: 'Dermatologi',       icon: '🔬' },
  { id: 'psych',    name: 'Psikiatri',         icon: '👤' },
  { id: 'ent',      name: 'THT-KL',            icon: '👂' },
  { id: 'ophtha',   name: 'Oftalmologi',       icon: '👁️' },
  { id: 'uro',      name: 'Urologi',           icon: '💧' },
  { id: 'anes',     name: 'Anestesiologi',     icon: '💉' },
  { id: 'radio',    name: 'Radiologi',         icon: '☢️' },
  { id: 'forensic', name: 'Forensik',          icon: '⚖️' },
  { id: 'komunitas',name: 'Kesmas',            icon: '🌍' },
  { id: 'random',   name: 'Acak / Random',     icon: '🎲' },
];

export const CASES_DATABASE: Record<string, Question[]> = {

  ipd: [
    {
      vignette: "Seorang laki-laki usia 34 tahun datang ke poliklinik dengan keluhan rasa terbakar di dada sejak 2 minggu terakhir. Keluhan dirasakan terutama setelah makan berat dan saat berbaring di malam hari. Pasien juga mengeluhkan sering merasa pahit di pangkal lidah. Pada pemeriksaan fisik: TD 120/80 mmHg, Nadi 80 x/menit, RR 18 x/menit, Suhu 36.5°C. Pemeriksaan abdomen: nyeri tekan epigastrium minimal.",
      hints: [
        "Laki-laki dewasa dengan keluhan rasa terbakar di area retrosternal.",
        "Keluhan memberat setelah makan atau saat posisi berbaring (post-prandial).",
        "Pemeriksaan fisik umum biasanya dalam batas normal kecuali nyeri epigastrium.",
        "Keluhan membaik sementara dengan penggunaan antasida.",
        "Terdapat gejala khas berupa heartburn dan regurgitasi asam."
      ],
      options: ["Gastroesophageal Reflux Disease (GERD)", "Gastritis Akut", "Ulkus Peptikum", "Achalasia", "Angina Pektoris Tidak Stabil"],
      answerIndex: 0,
      explanation: "Gejala klasik berupa heartburn (rasa terbakar di dada) dan regurgitasi (rasa pahit/asam di mulut) yang dipicu oleh posisi atau makanan sangat mengarah pada GERD."
    },
    {
      vignette: "Seorang perempuan usia 25 tahun datang dengan keluhan demam tinggi mendadak sejak 4 hari yang lalu. Keluhan disertai nyeri sendi, nyeri di belakang bola mata, dan bintik merah di lengan. Pada pemeriksaan fisik: TD 110/70 mmHg, Nadi 92 x/menit, RR 20 x/menit, Suhu 38.8°C. Uji Rumple Leede (+). Hasil lab: Hb 14 g/dL, Ht 45%, Trombosit 85.000/µL, Leukosit 3.200/µL.",
      hints: [
        "Perempuan muda dengan demam tinggi akut dan nyeri retro-orbital.",
        "Terdapat riwayat nyeri sendi (breakbone fever) dan petekie.",
        "Ditemukan tanda fragilitas kapiler pada pemeriksaan fisik.",
        "Hasil laboratorium menunjukkan penurunan jumlah trombosit dan leukosit.",
        "Kondisi ini disebabkan oleh infeksi virus melalui vektor nyamuk Aedes aegypti."
      ],
      options: ["Demam Tifoid", "Malaria", "Demam Berdarah Dengue", "Chikungunya", "Leptospirosis"],
      answerIndex: 2,
      explanation: "Demam tinggi mendadak, nyeri retro-orbital, petekie, Rumple Leede positif, dan trombositopenia (<100.000) adalah kriteria diagnosis Demam Berdarah Dengue (DBD)."
    },
    {
      vignette: "Seorang laki-laki usia 55 tahun datang untuk kontrol rutin. Pasien mengeluh sering merasa haus, sering buang air kecil terutama malam hari, dan nafsu makan meningkat namun berat badan turun 5 kg dalam sebulan. Pada pemeriksaan fisik: TD 130/80 mmHg, BMI 28 kg/m². Hasil Gula Darah Sewaktu: 250 mg/dL.",
      hints: [
        "Laki-laki paruh baya dengan gejala polidipsi, poliuria, dan polifagia.",
        "Terdapat penurunan berat badan meskipun nafsu makan meningkat.",
        "Pasien memiliki profil risiko obesitas (BMI >25).",
        "Pemeriksaan gula darah sewaktu menunjukkan nilai di atas normal.",
        "Penyakit ini disebabkan oleh resistensi insulin atau defisiensi insulin relatif."
      ],
      options: ["Diabetes Insipidus", "Diabetes Mellitus Tipe 2", "Hipertiroidisme", "Sindrom Cushing", "Gagal Ginjal Kronis"],
      answerIndex: 1,
      explanation: "Kombinasi gejala klasik (3P: polidipsi, poliuria, polifagia) ditambah hasil GDS ≥ 200 mg/dL sudah cukup untuk menegakkan diagnosis DM Tipe 2."
    },
    {
      vignette: "Seorang perempuan usia 28 tahun mengeluh batuk berdahak sejak 3 minggu yang lalu. Batuk disertai bercak darah, keringat malam tanpa aktivitas, dan penurunan nafsu makan. Pemeriksaan fisik: TD 110/70 mmHg, Suhu 37.8°C. Auskultasi paru didapatkan suara napas bronkial di apex paru kanan. Pemeriksaan sputum SPS didapatkan hasil (+/-/+).",
      hints: [
        "Perempuan muda dengan batuk kronis lebih dari 2 minggu.",
        "Terdapat gejala konstitusional seperti demam subfebris dan keringat malam.",
        "Lokasi kelainan sering ditemukan di bagian apex paru.",
        "Pemeriksaan mikroskopis dahak menunjukkan adanya bakteri tahan asam.",
        "Penyebab utamanya adalah Mycobacterium tuberculosis."
      ],
      options: ["Bronkiektasis", "Abses Paru", "Kanker Paru", "Tuberkulosis Paru", "Pneumonia Bakterialis"],
      answerIndex: 3,
      explanation: "Batuk kronis, keringat malam, penurunan BB, dan hasil BTA positif memastikan diagnosis TB Paru."
    },
    {
      vignette: "Seorang perempuan usia 20 tahun datang dengan keluhan lemas dan cepat lelah sejak 1 bulan. Pasien tampak pucat. Riwayat menstruasi sering memanjang dan banyak. Pemeriksaan fisik: Konjungtiva anemis (+/+), atrofi papil lidah (+), koilonikia (+). Hasil lab: Hb 8 g/dL, MCV 72 fL, MCHC 28 g/dL.",
      hints: [
        "Perempuan muda dengan sindrom anemia (lemas, pucat, pusing).",
        "Memiliki riwayat perdarahan kronis (menstruasi banyak/menoragia).",
        "Ditemukan tanda spesifik berupa kuku sendok (koilonikia/spoon nails).",
        "Gambaran darah tepi menunjukkan anemia mikrositik hipokrom.",
        "Terapi utamanya adalah suplementasi preparat besi (Sulfas Ferrosus)."
      ],
      options: ["Anemia Penyakit Kronis", "Anemia Defisiensi Besi", "Thalassemia Beta", "Anemia Aplastik", "Anemia Defisiensi Asam Folat"],
      answerIndex: 1,
      explanation: "MCV dan MCHC rendah (mikrositik hipokrom) ditambah koilonikia dan riwayat menoragia sangat spesifik untuk Anemia Defisiensi Besi."
    },
    {
      vignette: "Seorang laki-laki usia 60 tahun datang dengan keluhan nyeri sendi lutut kanan yang memberat saat berjalan dan berkurang saat istirahat. Keluhan sudah dirasakan selama 1 tahun. Pasien memiliki riwayat obesitas. Pada pemeriksaan fisik: krepitasi pada sendi lutut kanan (+), nyeri tekan (+), tanda radang akut (hangat/merah) tidak ditemukan.",
      hints: [
        "Laki-laki lanjut usia dengan nyeri sendi lutut unilateral.",
        "Nyeri bersifat mekanik (muncul saat aktivitas, membaik saat istirahat).",
        "Terdapat faktor risiko berupa usia dan berat badan berlebih.",
        "Pemeriksaan fisik menunjukkan adanya suara gemertak (krepitasi) pada sendi.",
        "Radiologi biasanya menunjukkan penyempitan celah sendi dan osteofit."
      ],
      options: ["Artritis Reumatoid", "Gout Arthritis", "Osteoartritis", "Septic Arthritis", "Spondilitis Ankilosa"],
      answerIndex: 2,
      explanation: "Osteoartritis ditandai dengan nyeri sendi degeneratif (mekanik), krepitasi, dan faktor risiko usia/obesitas, tanpa tanda inflamasi sistemik."
    },
    {
      vignette: "Seorang laki-laki usia 45 tahun datang dengan keluhan demam sejak 10 hari yang lalu. Demam dirasakan lebih tinggi pada sore dan malam hari. Keluhan disertai mual, muntah, dan belum BAB selama 4 hari. Pemeriksaan fisik: Suhu 39°C, lidah kotor dengan tepian hiperemis dan tremor. Pemeriksaan penunjang: Tubex TF didapatkan skor 6.",
      hints: [
        "Laki-laki dewasa dengan demam febris remiten lebih dari 7 hari.",
        "Terdapat gangguan saluran cerna berupa konstipasi atau diare.",
        "Pemeriksaan fisik menunjukkan 'coated tongue' (lidah kotor bertepi hiperemis).",
        "Uji serologi menunjukkan adanya antibodi terhadap antigen O9 Salmonella typhi.",
        "Terapi pilihan utama biasanya golongan Fluorokuinolon atau Seftriakson."
      ],
      options: ["Hepatitis A", "Malaria", "Demam Tifoid", "Dengue Fever", "Leptospirosis"],
      answerIndex: 2,
      explanation: "Demam lebih dari seminggu (pola step-ladder), lidah kotor, dan skor Tubex >4 adalah indikasi kuat Demam Tifoid."
    },
    {
      vignette: "Seorang perempuan usia 30 tahun mengeluh sering berdebar-debar, mudah berkeringat, dan berat badan turun meskipun nafsu makan meningkat. Pasien juga merasa tangannya sering gemetar. Pemeriksaan fisik: TD 140/80 mmHg, Nadi 115 x/menit, exophthalmos (+/+), terdapat pembesaran difus pada kelenjar tiroid. Lab: TSH rendah, FT4 tinggi.",
      hints: [
        "Perempuan muda dengan gejala hipermetabolisme (takikardia, penurunan BB).",
        "Ditemukan tanda intoleransi panas dan keringat berlebih.",
        "Pemeriksaan fisik menunjukkan mata menonjol (proptosis/exophthalmos).",
        "Profil hormon tiroid menunjukkan kondisi hipertiroidisme primer.",
        "Penyebab autoimun tersering dari kondisi ini adalah penyakit Graves."
      ],
      options: ["Penyakit Graves", "Tiroiditis Hashimoto", "Struma Nodusa Toksik", "Krisis Tiroid", "Hipotiroidisme"],
      answerIndex: 0,
      explanation: "Trias Graves: Hipertiroidisme, Exophthalmos, dan Struma difus sangat sesuai dengan kasus ini."
    },
    {
      vignette: "Seorang laki-laki usia 40 tahun datang dengan keluhan mata dan kulit menguning sejak 1 minggu. Keluhan disertai mual dan air kencing berwarna seperti teh pekat. Pasien memiliki riwayat menggunakan jarum suntik bergantian 5 tahun yang lalu. Hasil lab: Bilirubin total 8 mg/dL, SGOT 450 U/L, SGPT 600 U/L, HBsAg (+).",
      hints: [
        "Laki-laki usia produktif dengan ikterus (jaundice).",
        "Terdapat urine berwarna gelap seperti teh.",
        "Riwayat perilaku berisiko (penggunaan jarum suntik bersama).",
        "Peningkatan enzim transaminase yang signifikan (>10x normal).",
        "Penanda serologis menunjukkan adanya antigen permukaan virus Hepatitis B."
      ],
      options: ["Hepatitis A Akut", "Hepatitis B Akut", "Sirosis Hepatis", "Kolelitiasis", "Karsinoma Hepatoseluler"],
      answerIndex: 1,
      explanation: "Kombinasi gejala ikterus, peningkatan transaminase yang sangat tinggi, dan HBsAg positif menunjukkan infeksi Hepatitis B Akut."
    },
    {
      vignette: "Seorang perempuan usia 45 tahun datang dengan keluhan nyeri dan kaku pada sendi-sendi jari tangan pada pagi hari selama lebih dari 1 jam. Sendi tampak bengkak secara simetris di kedua tangan. Pemeriksaan fisik: edema dan nyeri tekan pada sendi MCP dan PIP. Lab: Rheumatoid Factor (+).",
      hints: [
        "Perempuan usia paruh baya dengan poliartritis simetris.",
        "Terdapat keluhan kaku sendi pagi hari (morning stiffness) >1 jam.",
        "Mengenai sendi-sendi kecil pada ekstremitas atas (MCP, PIP).",
        "Pemeriksaan serologis menunjukkan antibodi terhadap fragmen Fc IgG.",
        "Dapat menyebabkan deformitas seperti swan-neck atau boutonniere jika kronis."
      ],
      options: ["Osteoartritis", "Artritis Reumatoid", "Sistemik Lupus Eritematosus", "Gout Arthritis", "Septic Arthritis"],
      answerIndex: 1,
      explanation: "Poliartritis simetris pada sendi kecil, kaku pagi hari >1 jam, dan RF positif memenuhi kriteria ACR/EULAR untuk Artritis Reumatoid."
    },
    {
      vignette: "Seorang laki-laki usia 52 tahun datang dengan keluhan bengkak di seluruh tubuh (anasarka). Pasien diketahui menderita DM sejak 15 tahun namun tidak rutin berobat. Pemeriksaan fisik: TD 170/100 mmHg, konjungtiva anemis (+). Lab: Ureum 150 mg/dL, Kreatinin 6.5 mg/dL, GFR 12 mL/menit/1.73m².",
      hints: [
        "Laki-laki dengan riwayat penyakit metabolik kronis (DM lama tidak terkontrol).",
        "Terdapat tanda overload cairan (anasarka) dan hipertensi.",
        "Ditemukan anemia yang sering menyertai defisiensi eritropoietin ginjal.",
        "Terjadi penurunan fungsi filtrasi ginjal secara drastis (azotemia).",
        "Nilai GFR < 15 mL/menit menunjukkan stadium gagal ginjal terminal."
      ],
      options: ["Gagal Ginjal Akut", "Penyakit Ginjal Kronik Stadium 5", "Sindrom Nefrotik", "Gagal Jantung Kanan", "Sirosis Hepatis"],
      answerIndex: 1,
      explanation: "Riwayat DM lama, peningkatan kadar ureum/kreatinin, dan GFR < 15 menunjukkan Penyakit Ginjal Kronik (PGK) stadium 5 (End-Stage Renal Disease)."
    },
    {
      vignette: "Seorang laki-laki usia 35 tahun baru pulang dari tugas di Papua. Pasien mengeluh demam tinggi yang menggigil setiap 2 hari sekali, diikuti dengan berkeringat banyak. Pemeriksaan fisik: konjungtiva anemis (+), splenomegali (Schuffner II). Hasil hapusan darah tepi: ditemukan gambaran ring form dan gametosit berbentuk pisang di dalam eritrosit.",
      hints: [
        "Laki-laki dengan riwayat perjalanan ke daerah endemis malaria.",
        "Pola demam periodik (paroksismal) setiap 2 hari.",
        "Ditemukan pembesaran organ limpa pada pemeriksaan fisik.",
        "Terjadi destruksi eritrosit yang menyebabkan anemia.",
        "Gametosit berbentuk pisang (crescent shape) adalah temuan patognomonis."
      ],
      options: ["Malaria Vivax", "Malaria Falciparum", "Malaria Ovale", "Malaria Malariae", "Demam Dengue"],
      answerIndex: 1,
      explanation: "Gametosit berbentuk pisang (crescent shape) adalah temuan patognomonis untuk Plasmodium falciparum."
    },
    {
      vignette: "Seorang laki-laki usia 62 tahun dibawa ke IGD karena muntah darah berwarna merah kehitaman sebanyak 2 gelas. Pasien memiliki riwayat perut membusung sejak 6 bulan lalu. Pada pemeriksaan fisik: konjungtiva anemis, spider naevi di dada, asites (+), dan palmar eritema (+).",
      hints: [
        "Laki-laki lanjut usia dengan perdarahan saluran cerna bagian atas (hematemesis).",
        "Terdapat tanda-tanda gagal fungsi hati kronis.",
        "Ditemukan tanda klinis akibat hiperestrogenisme seperti spider naevi.",
        "Terdapat akumulasi cairan di rongga peritoneum (asites).",
        "Penyebab perdarahan tersering pada kasus ini adalah pecahnya varises esofagus."
      ],
      options: ["Gastritis Erosif", "Sirosis Hepatis dengan Varises Esofagus", "Ulkus Peptikum", "Kanker Lambung", "Hepatitis B Kronis"],
      answerIndex: 1,
      explanation: "Tanda gagal hati (spider naevi, asites, palmar eritema) disertai hematemesis menunjukkan sirosis hepatis dengan komplikasi hipertensi portal/varises esofagus."
    },
    {
      vignette: "Seorang laki-laki usia 48 tahun datang dengan keluhan sesak napas disertai demam dan batuk produktif dengan dahak berwarna kekuningan. Pada pemeriksaan fisik: Suhu 38.9°C, RR 26 x/menit. Perkusi redup di basal paru kiri dan suara napas ronkhi basah kasar. Foto thorax menunjukkan infiltrat pada lobus bawah paru kiri.",
      hints: [
        "Laki-laki dewasa dengan infeksi saluran napas bawah akut.",
        "Terdapat demam tinggi dan dahak mukopurulen (kekuningan).",
        "Pemeriksaan fisik menunjukkan tanda konsolidasi paru.",
        "Foto rontgen dada mengonfirmasi adanya bayangan opak (infiltrat).",
        "Penanganan awal biasanya menggunakan antibiotik empiris."
      ],
      options: ["Pneumonia Komunitas", "Tuberkulosis Paru", "Efusi Pleura", "Atelektasis", "Edema Paru"],
      answerIndex: 0,
      explanation: "Trias demam, batuk produktif, dan infiltrat pada rontgen thorax mengarah pada diagnosis Pneumonia Komunitas (CAP)."
    },
    {
      vignette: "Seorang perempuan usia 22 tahun mengeluh sering pusing dan mudah mengantuk. Pasien mengaku sedang menjalani diet ketat tanpa daging selama 3 bulan. Lab: Hb 9 g/dL, MCV 110 fL. Pada apusan darah tepi ditemukan neutrofil hipersegmentasi.",
      hints: [
        "Perempuan muda dengan sindrom anemia.",
        "Terdapat riwayat asupan nutrisi yang tidak adekuat (diet ketat tanpa daging).",
        "Ukuran sel darah merah lebih besar dari normal (makrositik, MCV >100).",
        "Terdapat kelainan morfologi sel darah putih (neutrofil hipersegmentasi).",
        "Kondisi ini disebabkan oleh gangguan sintesis DNA akibat defisiensi vitamin B12/folat."
      ],
      options: ["Anemia Defisiensi Besi", "Anemia Megaloblastik", "Anemia Penyakit Kronis", "Anemia Aplastik", "Thalassemia"],
      answerIndex: 1,
      explanation: "MCV tinggi (>100 fL) dan neutrofil hipersegmentasi merupakan karakteristik anemia megaloblastik (defisiensi B12 atau asam folat)."
    },
    {
      vignette: "Seorang laki-laki usia 50 tahun datang dengan keluhan perut kiri terasa penuh dan membesar. Pasien juga sering merasa cepat kenyang dan BB turun. Pemeriksaan fisik: Splenomegali masif hingga SIAS (Schuffner VIII). Lab: Leukosit 150.000/µL dengan peningkatan seluruh seri granulosit dan ditemukan Philadelphia Chromosome (+).",
      hints: [
        "Laki-laki paruh baya dengan rasa tidak nyaman di abdomen kiri.",
        "Ditemukan splenomegali yang sangat menonjol hingga SIAS.",
        "Laboratorium menunjukkan leukositosis ekstrem.",
        "Apusan darah menunjukkan 'full spectrum' sel granulosit (mielosit, metamielosit).",
        "Terdapat translokasi genetik spesifik t(9;22) — Kromosom Philadelphia."
      ],
      options: ["Leukemia Limfositik Akut", "Leukemia Granulositik Kronik (CML)", "Leukemia Mielositik Akut", "Limfoma Hodgkin", "Polisitemia Vera"],
      answerIndex: 1,
      explanation: "Splenomegali masif, leukositosis berat seri granulosit, dan adanya Kromosom Philadelphia (t9;22) adalah diagnostik untuk CML/LGK."
    },
    {
      vignette: "Seorang laki-laki usia 55 tahun datang ke IGD dengan keluhan nyeri dada menjalar ke lengan kiri sejak 1 jam yang lalu. TD 150/90 mmHg, Nadi 100 x/m. EKG menunjukkan ST elevasi pada sadapan V1-V4.",
      hints: [
        "Pria paruh baya dengan nyeri dada menjalar ke lengan kiri.",
        "Karakteristik nyeri seperti tertindih beban berat disertai keringat dingin.",
        "Kemungkinan sindrom koroner akut — pikirkan segera.",
        "EKG: ST elevasi V1-V4 → infark miokard akut anterior.",
        "Tatalaksana awal: Oksigen, Aspirin, Nitrat, Morfin, Clopidogrel."
      ],
      options: ["STEMI Anterior — Mulai Tatalaksana MONACO", "Antasida oral", "Analgesik Opioid saja", "Antibiotik broad-spectrum", "Observasi ketat tanpa obat"],
      answerIndex: 0,
      explanation: "STEMI Anterior membutuhkan tatalaksana awal MONACO: Morfin, Oksigen, Nitrat, Aspirin, Clopidogrel. Reperfusi segera (PCI/fibrinolisis) adalah prioritas utama."
    },
    {
      vignette: "Wanita 52 tahun dengan DM tipe 2 sejak 10 tahun datang kontrol. GDP 280 mg/dL, G2PP 380 mg/dL, HbA1c 10.5%, kreatinin 1.8 mg/dL, proteinuria +3, LDL 185 mg/dL. Saat ini hanya minum metformin 500 mg/hari.",
      hints: [
        "DM tipe 2 jangka panjang dengan kontrol glikemik sangat buruk.",
        "HbA1c 10.5% jauh di atas target <7%.",
        "Kreatinin naik + proteinuria +3 — komplikasi ginjal.",
        "Pola kerusakan: glomerulosklerosis difus pada nefropati diabetik.",
        "Perlu intensifikasi OAD + proteksi ginjal + statin."
      ],
      options: ["Lanjutkan metformin dosis sama", "DM Tipe 2 Tidak Terkontrol + Nefropati Diabetik", "Glomerulonefritis Akut", "Hipertensi Renal primer", "Sindroma Metabolik tanpa komplikasi"],
      answerIndex: 1,
      explanation: "Diagnosis: DM Tipe 2 Tidak Terkontrol (HbA1c >10%) disertai Nefropati Diabetik Stadium 3. Tatalaksana: tambah GLP-1 RA atau SGLT2i, ACEi/ARB untuk proteinuria, statin dosis tinggi."
    },
    {
      vignette: "Pria 40 tahun datang dengan nyeri sendi ibu jari kaki kanan mendadak semalam, merah, bengkak, dan sangat nyeri. Demam subfebris. Asam urat serum 12 mg/dL. Analisis cairan sendi: kristal monosodium urat berbentuk jarum, birefringent negatif. Riwayat minum alkohol dan makan jeroan.",
      hints: [
        "Artritis akut monoartikular pada ibu jari kaki — podagra klasik.",
        "Onset mendadak malam hari, nyeri hebat seperti terbakar.",
        "Hiperurisemia + riwayat alkohol dan jeroan.",
        "Analisis cairan sendi: kristal jarum, negatif birefringen — gold standard.",
        "Bukan pseudogout (CPPD = positif birefringen)."
      ],
      options: ["Pseudogout", "Artritis Reumatoid", "Artritis Gout Akut", "Selulitis kaki", "Artritis Septik"],
      answerIndex: 2,
      explanation: "Artritis Gout Akut dikonfirmasi kristal MSU pada analisis cairan sendi. Tatalaksana akut: NSAIDs (indometasin/naproksen), kolkisin, atau kortikosteroid. Setelah mereda: allopurinol (target AU <6 mg/dL)."
    },
    {
      vignette: "Pria 55 tahun dengan ikterus progresif 3 minggu, urin teh pekat, feses pucat, pruritus. Tidak demam. Tanda Courvoisier (+). Bilirubin total 18 mg/dL (direk dominan), ALP dan GGT sangat tinggi, CA 19-9 sangat meningkat.",
      hints: [
        "Ikterus + urin gelap + feses pucat = ikterus obstruktif.",
        "Tidak demam — menyingkirkan kolangitis akut.",
        "Tanda Courvoisier: kantung empedu teraba tidak nyeri = obstruksi distal.",
        "ALP/GGT dominan = pola kolestasis ekstrahepatik.",
        "CA 19-9 sangat tinggi mengarah ke keganasan pankreas."
      ],
      options: ["Hepatitis A Akut", "Koledokolitiasis", "Karsinoma Kaput Pankreas", "Sirosis Hepatis Dekompensata", "Hepatitis Autoimun"],
      answerIndex: 2,
      explanation: "Karsinoma Kaput Pankreas: Tanda Courvoisier + ikterus obstruktif tanpa nyeri + CA 19-9 tinggi. Tatalaksana: CT-scan triphasic untuk staging, ERCP untuk dekompresi bilier, Whipple procedure jika resektabel."
    }
  ],

  peds: [
    {
      vignette: "Anak laki-laki usia 2 tahun dibawa ke IGD karena kejang kelojotan seluruh tubuh selama 3 menit. Riwayat demam tinggi sejak 1 hari. Suhu 39.5°C. Kaku kuduk negatif. Langsung sadar setelah kejang berhenti.",
      hints: [
        "Anak balita kejang kelojotan seluruh tubuh.",
        "Didahului demam tinggi mendadak.",
        "Kejang singkat (<15 menit) dan langsung sadar pasca-kejang.",
        "Kaku kuduk negatif — tidak ada tanda meningitis.",
        "Umum pada anak 6 bulan–5 tahun yang demam tinggi."
      ],
      options: ["Epilepsi idiopatik", "Meningitis bakterial", "Kejang Demam Sederhana", "Kejang Demam Kompleks", "Ensefalitis viral"],
      answerIndex: 2,
      explanation: "Kejang Demam Sederhana: kejang <15 menit, umum (tonik-klonik), tidak berulang dalam 24 jam, langsung sadar, dipicu demam tanpa infeksi SSP. Tatalaksana: parasetamol/ibuprofen, diazepam rektal jika kejang >5 menit."
    },
    {
      vignette: "Bayi laki-laki 8 bulan dibawa ibunya karena sesak napas dan batuk sejak 3 hari. Lahir prematur 34 minggu. Suhu 38°C, RR 62x/mnt, retraksi subkostal, ekspirasi memanjang, wheezing di seluruh lapang paru. SpO₂ 91%. Rontgen: hiperaerasi, infiltrat peribronkial.",
      hints: [
        "Bayi <1 tahun dengan wheezing dan sesak — tipikal bronkiolitis.",
        "Riwayat prematur = faktor risiko RSV berat.",
        "RR 62 + retraksi subkostal + SpO₂ <94% = distres napas berat.",
        "Ekspirasi memanjang + wheezing = obstruksi jalan napas kecil (bronkiolus).",
        "Hiperaerasi pada rontgen + usia bayi = bronkiolitis, bukan asma."
      ],
      options: ["Asma Bronkial", "Bronkiolitis Akut", "Pneumonia Bakterial", "Croup (Laringotrakeitis)", "Aspirasi Benda Asing"],
      answerIndex: 1,
      explanation: "Bronkiolitis Akut (umumnya RSV). Tatalaksana: suportif — O₂, hidrasi adekuat, posisi semi-fowler. Nebulisasi NaCl 3% hipertonik. Antibiotik tidak diindikasikan (viral). Rawat inap jika SpO₂ <94%."
    },
    {
      vignette: "Anak perempuan 5 tahun dibawa karena demam 7 hari, ruam di tubuh, mata merah bilateral tanpa sekret, bibir merah kering pecah-pecah, lidah strawberry, dan tangan-kaki bengkak. KGB servikal kanan teraba 2 cm. LED dan CRP sangat meningkat.",
      hints: [
        "Demam >5 hari persisten pada anak — selalu pikirkan penyakit sistemik.",
        "Konjungtivitis non-eksudatif bilateral + bibir pecah-pecah.",
        "Lidah strawberry + edema ekstremitas + limfadenopati servikal.",
        "Kriteria diagnostik: ≥4 dari 5 temuan klinis + demam >5 hari.",
        "Komplikasi paling ditakuti: aneurisma arteri koroner."
      ],
      options: ["Demam Reumatik Akut", "Penyakit Kawasaki", "Campak (Morbili)", "Demam Berdarah Dengue", "Artritis Idiopatik Juvenil"],
      answerIndex: 1,
      explanation: "Penyakit Kawasaki (5/5 kriteria terpenuhi). Tatalaksana: IVIG 2 g/kg dosis tunggal + Aspirin dosis tinggi. Echokardiografi wajib untuk deteksi aneurisma koroner."
    },
    {
      vignette: "Anak laki-laki 3 tahun dibawa karena BAB cair >10x sejak kemarin, muntah 5x, tidak mau minum. BB turun 8% dari baseline. Pemeriksaan: mata sangat cekung, air mata tidak ada, turgor kulit kembali >3 detik, bibir kering, anak tampak lemah.",
      hints: [
        "Diare akut + muntah + tidak mau minum pada balita.",
        "BB turun 8% = dehidrasi bermakna.",
        "Mata sangat cekung + tidak ada air mata = tanda dehidrasi berat.",
        "Turgor kulit kembali >3 detik = skin tenting, dehidrasi berat.",
        "Anak letargis = perlu rehidrasi segera."
      ],
      options: ["Dehidrasi Ringan", "Dehidrasi Sedang–Berat", "Syok Hipovolemik", "Disentri Basiler", "Intususepsi"],
      answerIndex: 1,
      explanation: "Diare Akut dengan Dehidrasi Sedang–Berat. Tatalaksana WHO Rencana B: Oralit 75 mL/kgBB dalam 3 jam jika bisa minum. Jika tidak bisa minum/syok → RL 100 mL/kgBB IV. Zinc 20 mg/hari 10–14 hari."
    }
  ],

  surg: [
    {
      vignette: "Pria 25 tahun datang ke IGD dengan nyeri perut kanan bawah sejak 12 jam, awalnya di sekitar pusar lalu pindah ke RLQ. Demam 38.2°C, mual, muntah 1x. Nyeri tekan titik McBurney (+), Rovsing sign (+), psoas sign (+), defence muscular (+). Leukosit 18.000/µL.",
      hints: [
        "Nyeri migrasi periumbilikal → RLQ = presentasi klasik apendisitis.",
        "Titik McBurney, Rovsing sign, psoas sign semuanya positif.",
        "Demam + leukositosis = proses inflamasi/infeksi aktif.",
        "Defence muscular = iritasi peritoneum lokal.",
        "Skor Alvarado ≥7 = apendisitis akut, operasi segera."
      ],
      options: ["Kolik Ureter Kanan", "Hernia Inguinalis Inkarserata", "Apendisitis Akut", "Kehamilan Ektopik Terganggu", "Limfadenitis Mesenterika"],
      answerIndex: 2,
      explanation: "Apendisitis Akut. Skor Alvarado ≥7. Tatalaksana: Apendektomi segera (laparoskopik atau terbuka). Antibiotik preoperatif (sefazolin + metronidazol). Jika perforasi: laparotomi + drainase."
    },
    {
      vignette: "Pria 60 tahun dengan riwayat hernia inguinalis kanan 5 tahun, biasanya bisa masuk sendiri. Kini benjolan tidak bisa masuk kembali sejak 8 jam lalu. Nyeri hebat. Benjolan keras, nyeri, kulit merah, tidak dapat direduksi. Bising usus meningkat. Mual muntah.",
      hints: [
        "Hernia sebelumnya reponibilis, kini tidak bisa masuk = inkarserata.",
        "Nyeri hebat + kulit merah + keras = tanda strangulasi mengancam.",
        "Durasi 8 jam + bising usus meningkat = obstruksi usus.",
        "Tidak bisa direduksi manual = butuh operasi segera.",
        "Jika ada iskemia usus = hernia strangulata, darurat bedah absolut."
      ],
      options: ["Hernia Inguinalis Reponibilis", "Limfadenopati Inguinal", "Hernia Inguinalis Inkarserata", "Abses Inguinal", "Torsio Testis"],
      answerIndex: 2,
      explanation: "Hernia Inguinalis Inkarserata — darurat bedah! Operasi segera: herniotomi + herniorafi. Jika ada tanda strangulasi (nekrosis usus) → reseksi segmen usus. Antibiotik preoperatif wajib."
    },
    {
      vignette: "Wanita 45 tahun obesitas, nyeri perut kanan atas seperti kolik menjalar ke bahu kanan, muncul setelah makan lemak. Murphy's sign (+). USG: batu empedu multiple 1–2 cm, dinding menebal. Bilirubin normal, leukosit normal.",
      hints: [
        "Kolik bilier post-prandial menjalar ke bahu kanan = kolesistitis.",
        "Murphy's sign positif = inflamasi kantung empedu aktif.",
        "4F: Female, Fat, Forty, Fertile = faktor risiko batu empedu.",
        "USG: batu + dinding tebal = kolesistitis akut/kronis.",
        "Bilirubin normal = belum ada obstruksi duktus biliaris."
      ],
      options: ["Kolesistitis Akut", "Koledokolitiasis", "Ulkus Peptikum", "Pankreatitis Akut", "Kolik Ureter Kanan"],
      answerIndex: 0,
      explanation: "Kolesistitis Akut pada Kolelitiasis. Murphy's sign (+) + batu + dinding tebal USG. Tatalaksana: Kolesistektomi laparoskopik (gold standard). Antibiotik (sefazolin). Elektif jika stabil, segera jika komplikasi."
    }
  ],

  obgyn: [
    {
      vignette: "Wanita 28 tahun G1P0A0 hamil 32 minggu dengan TD 160/110 mmHg (diukur 2x selang 4 jam), sakit kepala hebat, nyeri epigastrium, pandangan kabur. Edema tungkai +3. Proteinuria +3. Trombosit 95.000/µL, LDH meningkat, transaminase meningkat.",
      hints: [
        "Hipertensi berat + proteinuria setelah 20 minggu = preeklampsia.",
        "Sakit kepala + gangguan visual = gejala impending eclampsia.",
        "Nyeri epigastrium = keterlibatan hati (preeklampsia berat).",
        "Trombosit rendah + LDH tinggi + transaminase tinggi = HELLP.",
        "HELLP = Hemolysis, Elevated Liver enzymes, Low Platelets."
      ],
      options: ["Hipertensi Gestasional", "Preeklampsia Ringan", "Preeklampsia Berat + HELLP Syndrome", "Eklampsia", "Hipertensi Kronis"],
      answerIndex: 2,
      explanation: "Preeklampsia Berat dengan HELLP Syndrome. Tatalaksana: MgSO₄ profilaksis kejang (loading 4g IV + maintenance 1–2 g/jam), antihipertensi (nifedipin/labetalol), stabilisasi, terminasi kehamilan SEGERA."
    },
    {
      vignette: "Wanita 24 tahun G1P0A0 datang ke IGD dengan nyeri perut kanan bawah hebat mendadak, perdarahan per vaginam minimal, dan pingsan sebentar. Tes kehamilan (+). USG transvaginal: tidak ada kantung gestasi di uterus, cairan bebas di kavum Douglas, massa hipoekhoik di adnexa kanan.",
      hints: [
        "Terlambat haid + tes kehamilan (+) + nyeri perut akut = KET sampai terbukti bukan.",
        "Tidak ada kantung gestasi intra-uterin pada USG.",
        "Cairan bebas di kavum Douglas = hemoperitoneum.",
        "Massa di adnexa kanan = gestasi di tuba fallopi.",
        "Sinkop = kehilangan darah signifikan, kondisi darurat!"
      ],
      options: ["Abortus Iminens", "Kista Ovarium Terpuntir", "Kehamilan Ektopik Terganggu", "Apendisitis Akut", "Mioma Uteri"],
      answerIndex: 2,
      explanation: "Kehamilan Ektopik Terganggu (KET) — DARURAT BEDAH. Tatalaksana: Resusitasi cairan IV, laparoskopi/laparotomi SEGERA, salpingostomi atau salpingektomi. Siapkan transfusi. Anti-D jika Rh negatif."
    }
  ],

  neuro: [
    {
      vignette: "Pria 68 tahun riwayat hipertensi dan DM, tiba-tiba afasia dan kelemahan lengan + wajah sisi kanan saat bangun tidur. NIHSS 12. CT scan kepala: tidak ada perdarahan. MRI DWI: lesi hiperintens di kapsula interna kiri.",
      hints: [
        "Defisit neurologis fokal mendadak = stroke sampai terbukti bukan.",
        "Hipertensi + DM = faktor risiko stroke iskemik.",
        "Afasia + hemiparesis kanan = lesi hemisfer kiri dominan.",
        "CT non-kontras negatif perdarahan = stroke iskemik.",
        "MRI DWI hiperintens = infark akut terkonfirmasi."
      ],
      options: ["Perdarahan Intraserebral", "Stroke Iskemik Akut", "Ensefalitis Viral", "SOL (Space Occupying Lesion)", "TIA"],
      answerIndex: 1,
      explanation: "Stroke Iskemik Akut. Jika dalam 4,5 jam onset → rtPA IV 0,9 mg/kgBB (max 90 mg). Wake-up stroke → evaluasi MRI penumbra. Antiplatelet (aspirin), statin, kontrol faktor risiko. Rawat di Stroke Unit."
    },
    {
      vignette: "Wanita 35 tahun dengan sakit kepala berdenyut satu sisi (kanan), intensitas sedang–berat, mual, muntah, fotofobia dan fonofobia. Sebelum sakit kepala melihat kilatan cahaya selama 20 menit. Tidak ada demam. Pemeriksaan neurologis normal.",
      hints: [
        "Sakit kepala unilateral + berdenyut + mual/muntah = ciri migrain.",
        "Kilatan cahaya (skotoma sintilans) 20 menit sebelumnya = aura visual.",
        "Fotofobia + fonofobia = sensitisasi sentral migrain.",
        "Pemeriksaan neurologis normal = tidak ada lesi struktural.",
        "Aura reversibel <60 menit + sakit kepala = Migrain dengan Aura."
      ],
      options: ["Sakit Kepala Tension", "Cluster Headache", "Migrain dengan Aura", "Meningitis Viral", "Subarachnoid Hemorrhage"],
      answerIndex: 2,
      explanation: "Migrain dengan Aura (ICHD-3). Tatalaksana akut: Triptan (sumatriptan) atau NSAIDs + antiemetik. Profilaksis jika ≥4x/bulan: topiramat, propranolol, atau amitriptilin."
    }
  ],

  cardio: [
    {
      vignette: "Pria 58 tahun datang ke IGD dengan nyeri dada kiri seperti ditekan, menjalar ke lengan kiri dan rahang, onset 45 menit lalu. Berkeringat dingin dan mual. EKG: ST elevasi di lead II, III, aVF. Troponin I: 0.8 ng/mL (N <0.04).",
      hints: [
        "Nyeri dada khas + menjalar ke lengan/rahang = angina tipikal.",
        "Berkeringat dingin + mual = aktivasi simpatis masif.",
        "ST elevasi di II, III, aVF = infark inferior.",
        "Troponin jauh di atas normal = nekrosis miokard aktif.",
        "ST elevasi ≥2 lead inferior berurutan = STEMI Inferior."
      ],
      options: ["Angina Pektoris Stabil", "NSTEMI", "STEMI Inferior", "Diseksi Aorta", "Perikarditis Akut"],
      answerIndex: 2,
      explanation: "STEMI Inferior. Tatalaksana: Reperfusi SEGERA — PCI primer dalam 90 menit (door-to-balloon). Antiplatelet ganda (aspirin + ticagrelor), antikoagulan, statin dosis tinggi, beta-blocker."
    },
    {
      vignette: "Wanita 70 tahun riwayat hipertensi 15 tahun, datang sesak napas saat tiduran (ortopnea), butuh 3 bantal. JVP meningkat, ronki basah halus di kedua basal paru, edema tungkai bilateral pitting +2. Rontgen: kardiomegali, gambaran bat-wing. EKG: LVH.",
      hints: [
        "Ortopnea + paroksismal nokturnal dispnea = gagal jantung kiri.",
        "JVP meningkat + edema bilateral pitting = gagal jantung kanan.",
        "Ronki basah basal + gambaran bat-wing rontgen = edema paru.",
        "Kardiomegali = pembesaran jantung kronik.",
        "Gejala kanan + kiri + riwayat hipertensi lama = GJK."
      ],
      options: ["PPOK Eksaserbasi", "Gagal Jantung Kongestif", "Sindroma Nefrotik", "Sirosis Hepatis", "Hipertensi Pulmonal"],
      answerIndex: 1,
      explanation: "Gagal Jantung Kongestif (NYHA III). Tatalaksana: ACEi/ARB, beta-blocker, diuretik loop (furosemid), antagonis aldosteron. Restriksi cairan dan garam. Evaluasi EF dengan echokardiografi."
    },
    {
      vignette: "Pria 45 tahun dengan jantung berdebar sejak 2 jam, pusing ringan. TD 105/70 mmHg, HR 155x/mnt ireguler, SpO₂ 96%. EKG: tidak ada gelombang P yang jelas, garis baseline fibrilasi, QRS sempit ireguler 150–160x/mnt.",
      hints: [
        "Palpitasi + HR tidak teratur = aritmia jantung.",
        "EKG: tidak ada gelombang P yang teridentifikasi.",
        "Baseline fibrilasi + QRS ireguler = gambaran khas AF.",
        "HR 150–160x/mnt = AF dengan respons ventrikel cepat.",
        "Onset <48 jam = pertimbangkan kardioversi elektif."
      ],
      options: ["SVT (Supraventrikular Takikardi)", "Atrial Flutter", "Atrial Fibrilasi", "VT Monomorfik", "Blok AV Total"],
      answerIndex: 2,
      explanation: "Atrial Fibrilasi dengan Respons Ventrikel Cepat. Onset <48 jam. Tatalaksana: Rate control (metoprolol/diltiazem IV), antikoagulan, evaluasi konversi ritme. Hemodinamik tidak stabil → kardioversi elektrik segera."
    }
  ],

  pulmo: [
    {
      vignette: "Pria 35 tahun dengan batuk produktif >3 bulan, demam hilang-timbul, keringat malam, penurunan BB 10 kg dalam 3 bulan. Riwayat kontak penderita TB. Pemeriksaan fisik: suara napas bronkial dan ronki di apeks kanan. Rontgen toraks: infiltrat apeks kanan dengan kavitas. BTA sputum: +3.",
      hints: [
        "Batuk produktif kronik >2 minggu = selalu curigai TB paru.",
        "Trias konstitusional: demam, keringat malam, BB turun.",
        "Riwayat kontak dengan penderita TB = epidemiologi kuat.",
        "Infiltrat apeks + kavitas pada rontgen = gambaran khas TB.",
        "BTA +3 = konfirmasi mikrobiologi: TB paru aktif."
      ],
      options: ["Pneumonia Komunitas", "Tuberkulosis Paru", "Kanker Paru", "Abses Paru", "Bronkiektasis Terinfeksi"],
      answerIndex: 1,
      explanation: "TB Paru BTA Positif. Memenuhi kriteria klinis, epidemiologi, radiologis, dan mikrobiologis. Tatalaksana: OAT Kategori 1 — 2RHZE / 4RH."
    },
    {
      vignette: "Wanita 28 tahun riwayat asma sejak kecil, datang ke IGD sesak mendadak saat terpapar debu. Tidak bisa bicara kalimat penuh, RR 32x/mnt, SpO₂ 88%, wheezing ekspirasi di seluruh lapang paru. Peak flow <50% prediksi. Tidak membaik dengan 2 dosis salbutamol inhaler.",
      hints: [
        "Riwayat asma + trigger debu = serangan akut asma.",
        "Tidak bisa bicara kalimat penuh + RR >30 = derajat berat.",
        "SpO₂ <90% = gagal napas mengancam jiwa.",
        "Peak flow <50% prediksi = obstruksi berat.",
        "Tidak respons salbutamol 2 dosis = Status Asmatikus."
      ],
      options: ["Asma Serangan Ringan", "PPOK Eksaserbasi Akut", "Status Asmatikus", "Pneumothoraks Spontan", "Syok Anafilaktik"],
      answerIndex: 2,
      explanation: "Status Asmatikus: sesak berat, SpO₂ <90%, peak flow <50%, tidak respons bronkodilator. Tatalaksana: O₂ tinggi, salbutamol nebulisasi kontinu, ipratropium, kortikosteroid IV (metilprednisolon), pertimbangkan MgSO₄ IV."
    },
    {
      vignette: "Pria 65 tahun perokok berat 40 pack-year, sesak progresif 2 tahun, batuk berdahak kronis. Ekspansi dada menurun bilateral, hipersonor perkusi, suara vesikular menurun, ekspirasi memanjang. Spirometri: VEP1/KVP 60%, VEP1 55% prediksi, tidak membaik bermakna pasca-bronkodilator.",
      hints: [
        "Perokok berat + sesak progresif kronik = PPOK sampai terbukti bukan.",
        "Barrel chest, hipersonor, ekspirasi memanjang = air trapping kronis.",
        "VEP1/KVP <70% pasca-bronkodilator = konfirmasi obstruksi.",
        "VEP1 55% prediksi = PPOK GOLD Stage 2 (Sedang).",
        "Tidak reversibel bermakna = membedakan dari asma."
      ],
      options: ["Asma Bronkial", "PPOK Stabil GOLD 2", "Bronkiektasis", "Gagal Jantung Kongestif", "Fibrosis Paru"],
      answerIndex: 1,
      explanation: "PPOK Stabil GOLD Grade 2: VEP1/KVP <70% + VEP1 50–80% prediksi. Tatalaksana: LABA atau LAMA, rehabilitasi paru, vaksinasi influenza/pneumokokus, stop merokok."
    }
  ],

  ortho: [
    {
      vignette: "Pria 70 tahun jatuh dari kursi, mendarat dengan tangan kanan menyangga badan. Nyeri pergelangan tangan kanan, bengkak, deformitas. Rontgen: fraktur radius distal, fragmen distal terdorong ke dorsal (dinner fork deformity). Neurovaskular distal intak.",
      hints: [
        "Jatuh bertumpu pada tangan terentang = mekanisme khas.",
        "Dinner fork deformity = fragmen dorsal displacement.",
        "Fraktur radius distal dengan angulasi dorsal = Colles, bukan Smith.",
        "Usia tua + osteoporosis = faktor risiko utama.",
        "Neurovaskular distal intak = tidak ada kompresi n. medianus."
      ],
      options: ["Fraktur Skafoid", "Dislokasi Pergelangan Tangan", "Fraktur Colles", "Fraktur Smith", "Sprain Pergelangan Tangan"],
      answerIndex: 2,
      explanation: "Fraktur Colles: fraktur radius distal dengan angulasi/displacement dorsal. Tatalaksana: Closed reduction + cast/splint 6 minggu. ORIF jika intraartikular atau tidak stabil."
    },
    {
      vignette: "Wanita 65 tahun tidak bisa berdiri setelah jatuh ringan dari posisi berdiri. Nyeri panggul kanan. Tungkai kanan tampak memendek dan eksorotasi. Rontgen pelvis: fraktur femur proksimal di bawah trokanter minor, garis fraktur transversal.",
      hints: [
        "Lansia + jatuh ringan + nyeri panggul = fraktur femur proksimal.",
        "Tungkai memendek + eksorotasi = tanda khas fraktur femur proksimal.",
        "Di bawah trokanter minor = regio intertrokanterik.",
        "Garis transversal = pola fraktur intertrokanterik.",
        "Bukan intrakapsular = risiko AVN lebih rendah."
      ],
      options: ["Fraktur Femur Intertrokanterik", "Fraktur Kolum Femur", "Dislokasi Panggul", "Fraktur Subtrokanterik", "Kontusio Panggul"],
      answerIndex: 0,
      explanation: "Fraktur Femur Intertrokanterik. Tatalaksana: Operasi dalam 24–48 jam — Dynamic Hip Screw (DHS) atau Intramedullary Nail (IMN). Mobilisasi dini post-op krusial untuk cegah komplikasi imobilisasi."
    }
  ],

  derma: [
    {
      vignette: "Pria 22 tahun dengan ruam melingkar target lesion di lengan dan trunk, vesikel pecah membentuk erosi, mukosa mulut dan mata terkena. Demam 38.5°C. Onset 3 hari lalu, 2 minggu setelah mengonsumsi kotrimoksazol. Detachment kulit >30% BSA.",
      hints: [
        "Target lesion + erosi mukosa = eritema multiforme atau SSJ/NET.",
        "Keterlibatan mukosa ≥2 tempat = SSJ/NET, bukan EM biasa.",
        "Onset setelah konsumsi obat = drug reaction.",
        "Detachment kulit: <10% BSA = SSJ; 10–30% = overlap; >30% = NET.",
        ">30% BSA detachment = Nekrolisis Epidermal Toksik (NET)."
      ],
      options: ["Eritema Multiforme", "Sindrom Stevens-Johnson", "Nekrolisis Epidermal Toksik (NET)", "Pemfigus Vulgaris", "Dermatitis Kontak Berat"],
      answerIndex: 2,
      explanation: "Nekrolisis Epidermal Toksik (NET): detachment >30% BSA. Penyebab: kotrimoksazol. STOP obat segera, rawat ICU/luka bakar, IVIG atau siklosporin, perawatan luka steril, konsul oftalmologi."
    },
    {
      vignette: "Wanita 30 tahun dengan plak merah bersisik keperakan di kulit kepala, siku, dan lutut sejak 2 tahun. Fenomena tetesan lilin (+), Auspitz sign (+). Kuku: pitting dan onycholysis. Sendi jari tangan kaku pagi hari.",
      hints: [
        "Plak merah bersisik putih-keperakan di siku/lutut/kepala = psoriasis.",
        "Auspitz sign (+) = perdarahan punctata khas psoriasis.",
        "Fenomena tetesan lilin = lapisan sisik tebal.",
        "Pitting kuku + onycholysis = nail psoriasis.",
        "Kaku sendi pagi hari = artritis psoriatik."
      ],
      options: ["Dermatitis Seboroik", "Tinea Korporis", "Psoriasis Vulgaris + Artritis Psoriatik", "Pitiriasis Rosea", "Liken Planus"],
      answerIndex: 2,
      explanation: "Psoriasis Vulgaris dengan Artritis Psoriatik. Topikal: kortikosteroid + kalsipotriol. Fototerapi NB-UVB. Sistemik: metotreksat, siklosporin. Artritis berat: anti-TNF (adalimumab, etanercept) atau anti-IL17."
    }
  ],

  psych: [
    {
      vignette: "Pria 28 tahun dibawa keluarga karena bicara kacau, yakin dirinya adalah nabi, mendengar suara-suara perintah, tidak tidur 5 hari, sangat bersemangat. Gejala 3 minggu. Tidak ada riwayat penggunaan zat. Sebelumnya normal.",
      hints: [
        "Waham kebesaran + halusinasi auditorik = gejala psikotik.",
        "Tidak tidur 5 hari + sangat energik = gejala manik.",
        "Halusinasi + waham dalam episode manik = manik psikotik.",
        "Tidak ada riwayat zat, tidak ada episode depresi sebelumnya.",
        "Episode pertama, gejala >1 minggu = Bipolar Tipe I vs Skizofrenia."
      ],
      options: ["Skizofrenia Paranoid", "Gangguan Bipolar Episode Manik + Psikosis", "Depresi Mayor + Psikosis", "Psikosis akibat Zat", "Gangguan Waham Menetap"],
      answerIndex: 1,
      explanation: "Gangguan Bipolar Tipe I, Episode Manik dengan Ciri Psikotik. Tatalaksana: mood stabilizer (lithium/valproat) + antipsikotik atipik (olanzapin/risperidon). Rawat inap jika tidak aman. Maintenance jangka panjang."
    },
    {
      vignette: "Wanita 42 tahun mengeluh sulit tidur 3 bulan, sering menangis tanpa sebab, anhedonia, konsentrasi buruk, nafsu makan hilang, BB turun 5 kg. Kadang merasa lebih baik mati. Tidak ada riwayat episode manik. PHQ-9: 22.",
      hints: [
        "Anhedonia + mood depresif >2 minggu = kriteria mayor depresi.",
        "Insomnia + anoreksia + penurunan BB = gejala vegetatif.",
        "Ideasi mati/bunuh diri = asesmen risiko segera wajib dilakukan.",
        "PHQ-9 >20 = depresi berat.",
        "Tidak ada riwayat manik = Depresi Mayor, bukan Bipolar."
      ],
      options: ["Distimia", "Gangguan Bipolar Depresi", "Gangguan Depresi Mayor Episode Berat", "Gangguan Cemas Menyeluruh", "Grief Normal"],
      answerIndex: 2,
      explanation: "Gangguan Depresi Mayor Episode Berat. Asesmen risiko bunuh diri PRIORITAS. Tatalaksana: CBT + SSRI (sertralin/escitalopram). Pertimbangkan rawat inap jika ideasi bunuh diri aktif. Follow-up ketat."
    }
  ],

  ent: [
    {
      vignette: "Pria 50 tahun dengan suara serak progresif 3 bulan dan sensasi mengganjal di tenggorok. Riwayat merokok 30 tahun dan alkohol. Penurunan BB 5 kg. Laringoskopi: massa eksofitik di plika vokalis kanan, plika vokalis kanan terfiksir. KGB servikal kanan teraba keras, tidak nyeri.",
      hints: [
        "Suara serak progresif >2 minggu pada perokok berat = RED FLAG keganasan.",
        "Riwayat rokok + alkohol = faktor risiko utama Ca kepala-leher.",
        "Penurunan BB signifikan = tanda keganasan sistemik.",
        "Massa eksofitik + plika vokalis terfiksir = invasi lokal.",
        "Limfadenopati servikal keras, tidak nyeri = metastasis KGB."
      ],
      options: ["Laringitis Kronik", "Karsinoma Laring", "Polip Plika Vokalis", "Nodul Plika Vokalis", "Papiloma Laring"],
      answerIndex: 1,
      explanation: "Karsinoma Laring. Tatalaksana: Biopsi konfirmasi histopatologi → staging (CT leher/thoraks) → terapi sesuai stadium: laringektomi parsial/total ± radioterapi."
    },
    {
      vignette: "Anak 8 tahun dengan nyeri telinga kanan, pendengaran berkurang, keluar cairan kuning sejak 3 hari. Demam 38°C. Otoskopi: membran timpani hiperemis, menonjol, tidak ada refleks cahaya, perforasi kecil dengan discharge purulen.",
      hints: [
        "Otalgia + otore + demam = otitis media akut.",
        "Membran timpani menonjol + hiperemis = tekanan dari infeksi.",
        "Perforasi + discharge purulen = OMA stadium perforasi.",
        "Pendengaran menurun = efusi telinga tengah.",
        "Anak usia sekolah = usia puncak OMA."
      ],
      options: ["Otitis Eksterna Difusa", "Otitis Media Akut Stadium Perforasi", "Kolesteatoma", "Otitis Media Serosa", "Mastoiditis Akut"],
      answerIndex: 1,
      explanation: "Otitis Media Akut (OMA) Stadium Perforasi. Tatalaksana: Amoksisilin 80–90 mg/kgBB/hari x 10 hari, analgesik, H₂O₂ untuk membersihkan sekret. Perforasi biasanya menutup spontan."
    }
  ],

  ophtha: [
    {
      vignette: "Pria 65 tahun dengan DM 20 tahun dan hipertensi, penglihatan kabur progresif bilateral 1 tahun. Tidak merah, tidak nyeri. Funduskopi: neovaskularisasi diskus, perdarahan vitreous, scar fibrosis, hard exudates masif di macula bilateral. HbA1c 11%.",
      hints: [
        "DM lama + penglihatan kabur bilateral non-nyeri = retinopati diabetik.",
        "Neovaskularisasi = tanda iskemia retina, komplikasi serius.",
        "Perdarahan vitreous + fibrosis = Retinopati Diabetik Proliferatif.",
        "Hard exudates di macula = edema makula diabetik.",
        "HbA1c tidak terkontrol = penyebab progresivitas kerusakan."
      ],
      options: ["AMD (Degenerasi Makula)", "Retinopati Diabetik Proliferatif + Edema Makula", "Oklusi Vena Retina Sentral", "Katarak Bilateral", "Glaukoma Sudut Terbuka"],
      answerIndex: 1,
      explanation: "Retinopati Diabetik Proliferatif + Edema Makula Diabetik. Tatalaksana: Anti-VEGF intravitreal (bevacizumab/ranibizumab), laser pan-retinal fotokoagulasi untuk PDR, vitrektomi jika perdarahan vitreous menetap."
    },
    {
      vignette: "Wanita 55 tahun dengan mata merah nyeri hebat mendadak, pandangan kabur, mual muntah. Visus turun, kornea edematous (hazy), bilik mata depan dangkal, pupil middilatasi terfiksir. TIO: 58 mmHg (N: 10–21). Riwayat membaca di ruang gelap sebelum serangan.",
      hints: [
        "Mata merah nyeri + mual muntah = glaukoma sudut tertutup akut.",
        "TIO 58 mmHg = kenaikan drastis tekanan intraokular.",
        "Pupil middilatasi terfiksir = iris membuntu sudut drainase.",
        "BMD dangkal = sudut sempit (sudut tertutup).",
        "Trigger: ruang gelap (dilatasi pupil) = mekanisme serangan."
      ],
      options: ["Konjungtivitis Akut", "Uveitis Anterior (Iridosiklitis)", "Glaukoma Sudut Tertutup Akut", "Skleritis", "Ulkus Kornea"],
      answerIndex: 2,
      explanation: "Glaukoma Sudut Tertutup Akut — DARURAT oftalmologis! Tatalaksana: turunkan TIO segera — asetazolamid IV, timolol tetes, pilokarpin, mannitol IV. Iridotomi laser perifer setelah TIO terkontrol."
    }
  ],

  uro: [
    {
      vignette: "Pria 45 tahun datang ke IGD dengan nyeri pinggang kanan sangat hebat mendadak, menjalar ke selangkangan, mual, gelisah. Tidak bisa tenang dalam posisi apapun. Urinalisis: eritrosit +++ tanpa leukosit. USG: hidronefrosis kanan ringan.",
      hints: [
        "Nyeri kolik hebat pinggang → selangkangan = kolik ureter.",
        "Tidak bisa diam (restlessness) = tanda khas kolik renal.",
        "Hematuria mikroskopik tanpa leukosituria = batu, bukan infeksi.",
        "Hidronefrosis kanan = obstruksi saluran kemih.",
        "CT scan non-kontras = gold standard untuk batu saluran kemih."
      ],
      options: ["Pielonefritis Akut", "Appendisitis Akut", "Nefrolitiasis / Kolik Ureter", "Aortic Aneurysm", "Hernia Inguinalis Kanan"],
      answerIndex: 2,
      explanation: "Nefrolitiasis / Kolik Ureter. Tatalaksana: Analgesik (NSAIDs/ketorolak) sebagai first-line, hidrasi, alpha-blocker (tamsulosin) untuk expulsion therapy. ESWL atau ureteroskopi jika batu >5mm atau tidak keluar spontan."
    },
    {
      vignette: "Pria 70 tahun datang dengan keluhan sulit memulai kencing, pancaran lemah, merasa tidak lampias, dan sering terbangun malam untuk kencing (nokturia 4–5x). Tidak ada demam atau hematuria. RT: prostat teraba membesar, licin, kenyal, simetris, batas atas tidak teraba. PSA 4.2 ng/mL.",
      hints: [
        "Pria usia lanjut dengan gejala LUTS (Lower Urinary Tract Symptoms).",
        "Kombinasi gejala obstruksi (lemah, tidak lampias) dan iritasi (nokturia).",
        "RT: prostat membesar, licin, kenyal = jinak.",
        "PSA sedikit meningkat tetapi dalam batas gray zone.",
        "Kondisi ini merupakan penyebab LUTS tersering pada pria lansia."
      ],
      options: ["Karsinoma Prostat", "Benign Prostatic Hyperplasia (BPH)", "Prostatitis Akut", "Striktur Uretra", "Kandung Kemih Neurogenik"],
      answerIndex: 1,
      explanation: "Benign Prostatic Hyperplasia (BPH): LUTS pada pria lansia + RT membesar jinak. Tatalaksana: alpha-blocker (tamsulosin), 5-alpha reductase inhibitor (finasteride), atau TURP jika gagal medis."
    }
  ],

  anes: [
    {
      vignette: "Seorang pasien laki-laki 55 tahun, ASA II, akan menjalani operasi laparotomi elektif. BB 70 kg. Preoperasi: TD 135/85 mmHg, Nadi 80 x/mnt, SpO₂ 98%. Di meja operasi, setelah induksi propofol 140 mg dan suksinilkolin 100 mg, terdapat fasikulas seluruh tubuh, kemudian pasien apnea. Langkah selanjutnya yang tepat adalah?",
      hints: [
        "Propofol adalah agen induksi hipnotik kerja cepat.",
        "Suksinilkolin adalah pelemas otot depolarisasi berdurasi sangat singkat.",
        "Fasikulas adalah tanda kerja suksinilkolin yang normal.",
        "Apnea terjadi karena relaksasi otot pernapasan — ini NORMAL setelah suksinilkolin.",
        "Tujuan relaksasi otot adalah untuk memfasilitasi intubasi endotrakeal."
      ],
      options: ["Berikan epinefrin dan atropin", "Lakukan ventilasi masker dan segera intubasi endotrakeal", "Tunggu pasien bernapas spontan", "Injeksi neostigmin sebagai antidot", "Hentikan operasi dan observasi"],
      answerIndex: 1,
      explanation: "Apnea setelah suksinilkolin adalah respons yang diharapkan. Tindakan berikutnya adalah ventilasi bag-mask dilanjutkan intubasi endotrakeal segera untuk proteksi jalan napas."
    },
    {
      vignette: "Perempuan 35 tahun akan menjalani operasi SC emergensi. Pasien mengaku alergi penisilin dengan reaksi anafilaksis berat. Tidak ada riwayat alergi lain. Setelah induksi RSI, tiba-tiba TD turun ke 60/30 mmHg, HR 130 x/mnt, SpO₂ 88%, seluruh tubuh muncul urtikaria merah. Apakah tatalaksana pertama yang paling tepat?",
      hints: [
        "Reaksi anafilaksis: hipotensi + takikardia + urtikaria setelah paparan antigen.",
        "Obat pertama yang harus diberikan dalam anafilaksis adalah epinefrin.",
        "Epinefrin bekerja sebagai vasopressor + bronkodilator + antihistamin fungsional.",
        "Dosis epinefrin anafilaksis: 0.3–0.5 mg IM pada paha anterolateral.",
        "Pemberian IV bolus epinefrin dapat menyebabkan aritmia pada pasien sadar."
      ],
      options: ["Difenhidramin IV 50 mg", "Metilprednisolon IV 125 mg", "Epinefrin 0.5 mg IM paha anterolateral", "Dopamin drip 5 mcg/kg/mnt", "Cairan kristaloid bolus 500 mL saja"],
      answerIndex: 2,
      explanation: "Epinefrin IM adalah lini pertama anafilaksis. Bekerja pada reseptor alfa-1 (vasokonstriksi), beta-1 (inotropik), dan beta-2 (bronkodilatasi). Antihistamin dan steroid hanya sebagai adjuvan, bukan terapi utama."
    },
    {
      vignette: "Pasien laki-laki 40 tahun post-operasi apendektomi. Saat di ruang pemulihan, pasien mengeluh nyeri VAS 7/10. Sudah mendapat ketorolak 30 mg IV. TD 120/80 mmHg, SpO₂ 98%, RR 16 x/mnt. Pasien tidak ada riwayat alergi opioid. Tatalaksana nyeri lanjut yang paling tepat?",
      hints: [
        "Nyeri post-operasi VAS ≥7 = nyeri berat, butuh analgesik lebih kuat.",
        "Ketorolak adalah NSAID, efeknya sudah diberikan.",
        "Untuk nyeri berat, diperlukan analgesik opioid.",
        "Morfin/petidin IV adalah pilihan opioid untuk nyeri post-op berat.",
        "Prinsip: analgesik multimodal (kombinasi NSAID + opioid) lebih efektif."
      ],
      options: ["Parasetamol oral saja", "Tingkatkan dosis ketorolak menjadi 60 mg", "Tambahkan morfin IV titrasi 2–4 mg", "Observasi saja, tunggu nyeri berkurang sendiri", "Berikan diazepam IV untuk sedasi"],
      answerIndex: 2,
      explanation: "Nyeri VAS ≥7 post-op yang tidak responsif terhadap NSAID memerlukan opioid. Morfin 2–4 mg IV titrasi adalah pilihan aman dengan monitoring SpO₂. Prinsip analgesik multimodal: NSAID + opioid > opioid saja."
    }
  ],

  radio: [
    {
      vignette: "Pasien laki-laki 55 tahun perokok berat datang dengan batuk darah. Foto thorax PA: tampak massa hilar kanan berbentuk irregular, batas tidak tegas, spikula (+), dengan pembesaran KGB mediastinum kanan. Tidak tampak efusi pleura.",
      hints: [
        "Lokasi hilar/sentral pada massa paru = curiga karsinoma bronkogenik sentral.",
        "Massa irregular + spikula = tanda keganasan pada foto dada.",
        "Perokok berat adalah faktor risiko utama kanker paru.",
        "Pembesaran KGB mediastinum = curiga metastasis nodal.",
        "Tipe histologis sentral tersering pada perokok: karsinoma sel skuamosa atau small cell."
      ],
      options: ["TB Milier", "Abses Paru", "Karsinoma Bronkogenik", "Pneumonia Lobaris", "Sarkoidosis Paru"],
      answerIndex: 2,
      explanation: "Massa hilar irregular + spikula + KGB mediastinum pada perokok berat = gambaran karsinoma bronkogenik. Pemeriksaan lanjut: CT thorax kontras, bronkoskopi + biopsi untuk konfirmasi histologi."
    },
    {
      vignette: "Anak 6 tahun dibawa karena sulit menelan dan ngiler. Foto polos leher lateral: tampak gambaran radiopak berbentuk koin di esofagus setinggi C6–T1. Densitas homogen, tepi rata, posisi frontal (tampak bulat pada AP).",
      hints: [
        "Anak kecil dengan disfagia akut = curiga benda asing tersangkut.",
        "Lokasi tersering benda asing esofagus: persimpangan krikofaring (C6).",
        "Benda asing koin di esofagus: tampak bulat pada proyeksi AP.",
        "Berbeda dengan trakea: koin di trakea tampak 'edge-on' (sempit) pada AP.",
        "Pemeriksaan pilihan: foto polos leher/dada atau CT scan leher."
      ],
      options: ["Tonsilitis Akut", "Benda Asing Esofagus (Koin)", "Benda Asing Trakea", "Abses Retrofaring", "Tumor Esofagus"],
      answerIndex: 1,
      explanation: "Koin di esofagus tampak bulat (frontal) pada foto AP — berbeda dari koin di trakea yang tampak 'edge-on'. Tatalaksana: esofagoskopi untuk pengambilan benda asing segera."
    },
    {
      vignette: "Wanita 60 tahun dengan nyeri punggung hebat mendadak, riwayat osteoporosis. Foto rontgen vertebra thorakolumbal lateral: tampak deformitas baji (wedge deformity) pada corpus vertebra Th12, penurunan tinggi anterior >50%, tanpa gambaran destruksi lytik.",
      hints: [
        "Nyeri punggung akut pada lansia dengan osteoporosis = fraktur kompresi.",
        "Deformitas baji (anterior wedge) = kompresi anterior korpus vertebra.",
        "Tidak ada destruksi lytik = bukan keganasan/metastasis.",
        "Osteoporosis melemahkan trabekula sehingga korpus kolaps dengan trauma minimal.",
        "Foto lateral adalah proyeksi kunci untuk diagnosis fraktur kompresi vertebra."
      ],
      options: ["Metastasis Tulang", "Spondilitis TB (Pott's Disease)", "Fraktur Kompresi Vertebra (Osteoporotik)", "Osteomielitis Vertebra", "Herniasi Diskus"],
      answerIndex: 2,
      explanation: "Wedge deformity Th12 tanpa lesi litik pada penderita osteoporosis = fraktur kompresi osteoporotik. Tatalaksana: bracing, analgesik, bifosfonat, pertimbangkan vertebroplasti/kyphoplasti."
    }
  ],

  forensic: [
    {
      vignette: "Seorang dokter diminta membuat Visum et Repertum (VeR) untuk korban penganiayaan. Korban laki-laki 30 tahun dengan luka lecet 2x1 cm di dahi, memar kebiruan di pelipis kiri, dan bengkak di bibir atas. Bagian apa dalam VeR yang menuliskan uraian temuan luka tersebut?",
      hints: [
        "Visum et Repertum memiliki struktur baku yang harus diikuti.",
        "Terdapat bagian yang memuat identitas, fakta, kesimpulan, dan penutup.",
        "Temuan fisik dari pemeriksaan adalah fakta objektif dokter.",
        "Bagian ini memuat semua temuan yang dilihat dan diperiksa dokter secara langsung.",
        "Istilah latin untuk bagian ini adalah 'pemberitaan' atau 'laporan'."
      ],
      options: ["Kesimpulan (Conclusio)", "Penutup", "Pemberitaan (Bagian Isi/Factum)", "Pendahuluan", "Keterangan Ahli"],
      answerIndex: 2,
      explanation: "Dalam VeR, uraian temuan pemeriksaan fisik ditulis di bagian Pemberitaan (Bagian Isi). Kesimpulan berisi interpretasi mediko-legal, sedangkan Penutup berisi pernyataan sumpah dokter."
    },
    {
      vignette: "Jenazah laki-laki tidak dikenal ditemukan di tepi sungai. Pemeriksaan luar: kulit tubuh keriput seperti 'washerwoman's skin', tangan dan kaki pucat keputihan, tidak ditemukan lebam mayat di punggung. Paru pada autopsi teraba seperti busa dan lebih berat dari normal.",
      hints: [
        "Kulit keriput 'washerwoman hands' = terendam air dalam waktu lama.",
        "Tidak ada livor mortis (lebam mayat) = kemungkinan jenazah bergerak dalam air.",
        "Paru berat dan berbusa = cairan masuk ke paru saat masih hidup.",
        "Gambaran paru ini disebut 'emphysema aquosum'.",
        "Kesamaan antara cairan paru dan sumber air = tanda mati tenggelam (drowning)."
      ],
      options: ["Mati karena tercekik", "Mati karena keracunan", "Mati tenggelam (Asfiksia Mekanik — Drowning)", "Pembunuhan dengan senjata tumpul", "Mati mendadak akibat serangan jantung"],
      answerIndex: 2,
      explanation: "Washerwoman's skin + emphysema aquosum (paru berbusa berisi air) + tidak ada livor mortis = kematian akibat tenggelam. Konfirmasi: diatom test — adanya diatom dari sumber air dalam jaringan tubuh."
    },
    {
      vignette: "Seorang korban perempuan 20 tahun datang ke IGD melaporkan dugaan perkosaan 6 jam lalu. Dokter jaga diminta melakukan pemeriksaan forensik. Apa langkah PERTAMA yang harus dilakukan dokter sebelum melakukan pemeriksaan?",
      hints: [
        "Pemeriksaan forensik pada korban kejahatan seksual memerlukan prosedur khusus.",
        "Pasien adalah manusia dewasa yang memiliki hak atas tubuhnya.",
        "Dokter tidak bisa memeriksa tanpa izin yang valid.",
        "Penjelasan tujuan pemeriksaan harus diberikan sebelum tindakan.",
        "Prinsip bioetika: autonomy — pasien berhak memutuskan."
      ],
      options: ["Langsung lakukan swab vagina untuk mencari sperma", "Minta polisi masuk untuk menyaksikan pemeriksaan", "Dapatkan informed consent dari pasien dan jelaskan prosedur pemeriksaan", "Hubungi keluarga pasien untuk izin pemeriksaan", "Catat luka terlebih dahulu tanpa berbicara dengan pasien"],
      answerIndex: 2,
      explanation: "Informed consent adalah langkah pertama wajib sebelum setiap pemeriksaan forensik. Pasien dewasa berhak menolak atau menerima pemeriksaan. Dokter menjelaskan tujuan, prosedur, dan konsekuensi dari pemeriksaan yang akan dilakukan."
    }
  ],

  komunitas: [
    {
      vignette: "Dokter puskesmas menemukan 15 kasus diare dalam 3 hari di satu desa. Semua mengonsumsi air sumur yang sama. Pemeriksaan air: E. coli positif, coliform >100/100mL. Tidak ada sarana sanitasi memadai.",
      hints: [
        "Banyak kasus diare dalam waktu singkat di satu area = KLB.",
        "Sumber air minum bersama = kemungkinan kontaminasi terpusat.",
        "E. coli + coliform tinggi = kontaminasi feses pada sumber air.",
        "Tidak ada sanitasi memadai = faktor risiko waterborne disease.",
        "Intervensi utama: hentikan sumber, perbaiki sanitasi, surveilans."
      ],
      options: ["Gastroenteritis Individual", "Keracunan Makanan Sporadis", "Kejadian Luar Biasa (KLB) Diare Waterborne", "Kolera Endemik", "Amoebiasis Individual"],
      answerIndex: 2,
      explanation: "KLB Diare Waterborne. Langkah: (1) Lapor ke Dinkes, (2) Investigasi epidemiologi, (3) Hentikan penggunaan sumber air terkontaminasi, (4) Distribusi air bersih, (5) Klorinasi sumur, (6) Edukasi PHBS, (7) Surveilans aktif."
    }
  ]
};
