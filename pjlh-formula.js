/**
 * pjlh-formula.js
 * Sumber tunggal (single source of truth) untuk semua perhitungan estimasi
 * infiltrasi/serapan air program PJLH Sekola Konang.
 *
 * Kenapa file ini ada:
 * Sebelumnya rumus yang sama ditulis ulang secara terpisah di admin.html,
 * index.html, konservasi.html, dan dashboard-buyer.html — dengan hasil yang
 * bisa berbeda satu sama lain. File ini menyatukan semuanya supaya angka
 * yang tampil di homepage selalu identik dengan yang dihitung di form admin
 * dan yang dilihat Buyer di dashboard mereka.
 *
 * Cara pakai di halaman lain:
 *   <script src="pjlh-formula.js"></script>
 *   ...
 *   const hasil = window.hitungEstimasiInfiltrasi(stats, doc.metodologi, doc.year, doc.sniParams);
 */

// ── Daftar metodologi yang tersedia ──
// Tiap program konservasi WAJIB memilih salah satu saat diinput di admin.
// Jangan ubah 'key' (value) di bawah ini tanpa memperbarui data yang sudah
// tersimpan di Firestore, karena key ini yang dipakai sebagai tag di setiap
// dokumen 'monitoring_reboisasi'.
const PJLH_METODOLOGI = {
  aqua_wb_v1: {
    label: 'Rumus Internal AQUA (Water Balance)',
    hint: 'Khusus untuk data yang harus tetap sama dengan laporan resmi PT Tirta Investama (AQUA) Keboncandi. Jangan pilih ini untuk program/mitra lain — koefisiennya spesifik untuk data historis AQUA dan belum tentu berlaku untuk lokasi/spesies lain.',
    butuhSniFields: false
  },
  volumetrik_sni: {
    label: 'Rumus Volumetrik (Per-Unit — Daya Tampung)',
    hint: 'Untuk program dengan rorak/sumur resapan yang dimensinya diukur langsung di lapangan (P×L×D untuk rorak, π×r²×kedalaman untuk sumur). Ini metode standar untuk kontribusi baru dari Seller/petani.',
    butuhSniFields: false
  },
  sni_hidrologi: {
    label: 'Rumus SNI / Hidrologi (Rasional — Daya Dukung)',
    hint: 'Untuk analisis kebutuhan di level kawasan (bukan per-titik), berdasarkan limpasan air hujan (Q = C × I × A). Butuh data luas program, koefisien tutupan lahan, dan curah hujan tahunan.',
    butuhSniFields: true
  },
  reforestasi_non_air: {
    label: 'Reforestasi Saja (Tanpa Konversi ke Air)',
    hint: 'Untuk program penanaman pohon murni tanpa rorak/sumur, dan tanpa koefisien konversi air yang tervalidasi untuk spesies/lokasi tersebut (mis. program penanaman gaharu). Program ini tetap tercatat di statistik "Sebaran Penanaman", tapi TIDAK ditambahkan ke total "Air Terserap" — supaya kita tidak mengklaim dampak air yang belum bisa dipertanggungjawabkan secara ilmiah.',
    butuhSniFields: false
  }
};

/**
 * Rumus khusus data historis AQUA (2021-2024).
 * Konstanta VWB/TIME/RAIN direkonstruksi mengikuti laporan resmi mereka —
 * JANGAN diubah tanpa konfirmasi ulang ke laporan aslinya, karena akan
 * membuat angka historis tidak lagi cocok dengan yang pernah dilaporkan.
 */
function hitungAquaWB(stats, year) {
  const VWB = 0.02495, TIME = 31.536, RAIN = 163;
  const trees = stats.trees || 0, rorak = stats.rorak || 0, sumur = stats.sumur || 0, biopori = stats.biopori || 0;
  let resP, resR, resS, resB;
  if (year === 2024) {
    // Formula sederhana yang khusus dipakai untuk data tahun 2024
    resP = (trees / 400) * 1.5;
    resR = rorak * 0.17;
    resS = 0;
    resB = 0;
  } else {
    resP = (trees / 400) * VWB * TIME * 0.75;
    resR = (rorak * 490 * 3 * RAIN) / 1e6;
    resS = (sumur * 754 * 3 * RAIN) / 1e6;
    resB = (biopori / 300) * 1.5;
  }
  return { resP, resR, resS, resB };
}

/**
 * Rumus Volumetrik per-unit — SAMA PERSIS dengan yang dipakai Seller saat
 * submit titik di dashboard-seller.html dan kalkulator publik water.html
 * (tab "Daya Tampung"). Karena di form admin kita cuma tahu JUMLAH rorak/
 * sumur (bukan dimensi tiap titik), dipakai asumsi dimensi standar:
 *   Rorak : 2 x 0.4 x 0.4 m, tanah normal (K=1.0), 120 hari hujan/tahun
 *   Sumur : diameter 0.8m (r=0.4m) x kedalaman 1.5m, tanpa faktor porous
 * Kalau dimensi riil program berbeda dari standar ini, sebaiknya input
 * langsung lewat form Seller per-titik supaya lebih akurat.
 */
function hitungVolumetrikSNI(stats) {
  const rorak = stats.rorak || 0, sumur = stats.sumur || 0;
  const HARI_HUJAN = 120, K_NORMAL = 1.0;

  const volRorakLiter = (2 * 0.4 * 0.4) * 1000; // P x L x D -> liter
  const serapanRorakLiter = (volRorakLiter * HARI_HUJAN * K_NORMAL);
  const resR = (rorak * serapanRorakLiter) / 1e6; // liter -> ML (megaliter)

  const volSumurM3 = Math.PI * Math.pow(0.4, 2) * 1.5;
  const serapanSumurLiter = (volSumurM3 * 1000 * HARI_HUJAN * K_NORMAL);
  const resS = (sumur * serapanSumurLiter) / 1e6;

  return { resP: 0, resR, resS, resB: 0 };
}

/**
 * Rumus SNI/Hidrologi Rasional (Daya Dukung) — level kawasan.
 * Q (m3/tahun) = C x I(mm/tahun) x A(m2) / 1000
 * Dikonversi ke ML/tahun (1 ML = 1000 m3).
 */
function hitungSNIHidrologi(sniParams) {
  const luasHa = parseFloat(sniParams && sniParams.luasHa) || 0;
  const koefC = parseFloat(sniParams && sniParams.koefC) || 0;
  const curahHujan = parseFloat(sniParams && sniParams.curahHujan) || 0;

  const A_m2 = luasHa * 10000;
  const Q_m3 = (koefC * curahHujan * A_m2) / 1000;
  const resR = Q_m3 / 1000; // m3 -> ML

  return { resP: 0, resR, resS: 0, resB: 0 };
}

/**
 * Fungsi utama — panggil ini dari semua halaman.
 *
 * @param {object} stats - { trees, rorak, sumur, biopori }
 * @param {string} metodologi - salah satu key di PJLH_METODOLOGI
 * @param {number} year - tahun program (dipakai khusus untuk aqua_wb_v1)
 * @param {object} sniParams - { luasHa, koefC, curahHujan } (khusus sni_hidrologi)
 * @returns {object} { resP, resR, resS, resB, total, metodologiPakai, legacyFallback }
 */
function hitungEstimasiInfiltrasi(stats, metodologi, year, sniParams) {
  stats = stats || {};
  let resP = 0, resR = 0, resS = 0, resB = 0;
  let legacyFallback = false;
  let metodologiPakai = metodologi;

  if (!metodologi) {
    // Data lama yang belum ditandai metodologinya (migrasi 2021-2025).
    // Supaya tidak error/kosong, sementara pakai rumus AQUA sebagai fallback
    // KHUSUS jika tahun <= 2024 (asumsi data lama), tapi ini HARUS diisi
    // manual oleh admin lewat form Input/Edit begitu sempat.
    legacyFallback = true;
    metodologiPakai = 'aqua_wb_v1';
    const r = hitungAquaWB(stats, year);
    resP = r.resP; resR = r.resR; resS = r.resS; resB = r.resB;
  } else if (metodologi === 'aqua_wb_v1') {
    const r = hitungAquaWB(stats, year);
    resP = r.resP; resR = r.resR; resS = r.resS; resB = r.resB;
  } else if (metodologi === 'volumetrik_sni') {
    const r = hitungVolumetrikSNI(stats);
    resP = r.resP; resR = r.resR; resS = r.resS; resB = r.resB;
  } else if (metodologi === 'sni_hidrologi') {
    const r = hitungSNIHidrologi(sniParams);
    resP = r.resP; resR = r.resR; resS = r.resS; resB = r.resB;
  } else if (metodologi === 'reforestasi_non_air') {
    resP = 0; resR = 0; resS = 0; resB = 0;
  }

  const total = resP + resR + resS + resB;
  return { resP, resR, resS, resB, total, metodologiPakai, legacyFallback };
}

window.PJLH_METODOLOGI = PJLH_METODOLOGI;
window.hitungEstimasiInfiltrasi = hitungEstimasiInfiltrasi;
