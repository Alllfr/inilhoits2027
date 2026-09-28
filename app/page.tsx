"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("show"); }),
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="zigzag-bg text-white">
<div className="blob w-72 h-72 bg-yellow-300 top-[-60px] left-[-60px]"></div>
<div className="blob w-56 h-56 bg-white top-40 right-[-40px]" style={{animationDelay:"1.5s"}}></div>
<div className="blob w-40 h-40 bg-yellow-200 bottom-32 left-10" style={{animationDelay:".8s"}}></div>
<div className="blob w-56 h-56 bg-pink-300 top-[8%] right-[15%]" style={{animationDelay:"2.2s"}}></div>
<div className="blob w-40 h-40 bg-pink-300 bottom-24 right-[38%]" style={{animationDelay:".5s"}}></div>

<section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 overflow-hidden">

  <svg className="ukiran absolute top-0 left-0 w-64 h-64" viewBox="0 0 200 200" fill="none" stroke="#fff" strokeWidth="2">
    <path d="M0 60 Q30 40 20 10 M0 100 Q45 90 40 50 Q60 45 55 20 M0 140 Q55 135 60 95"/>
    <circle cx="20" cy="10" r="4" fill="#fff" stroke="none"/>
    <circle cx="55" cy="20" r="3" fill="#ffd23f" stroke="none"/>
  </svg>
  <svg className="ukiran absolute bottom-0 left-0 w-72 h-72" viewBox="0 0 220 220" fill="none" stroke="#ec1e79" strokeWidth="2">
    <path d="M0 160 Q40 150 35 200 M0 130 Q70 120 65 190 Q100 185 95 220"/>
    <circle cx="35" cy="200" r="4" fill="#ec1e79" stroke="none"/>
    <circle cx="95" cy="220" r="3" fill="#fff" stroke="none"/>
  </svg>
  <svg className="ukiran absolute bottom-0 right-0 w-60 h-60" viewBox="0 0 200 200" fill="none" stroke="#7c3aed" strokeWidth="2">
    <path d="M200 150 Q160 145 165 195 M200 120 Q130 112 128 180"/>
    <circle cx="165" cy="195" r="4" fill="#7c3aed" stroke="none"/>
  </svg>
  <svg className="ukiran absolute top-0 right-0 w-56 h-56" viewBox="0 0 200 200" fill="none" stroke="#ffd23f" strokeWidth="2">
    <path d="M200 40 Q165 30 168 70 M200 70 Q150 60 148 105"/>
    <circle cx="168" cy="70" r="3" fill="#ffd23f" stroke="none"/>
  </svg>
  <svg className="ukiran absolute top-1/3 left-0 w-40 h-40" viewBox="0 0 160 160" fill="none" stroke="#ec1e79" strokeWidth="2">
    <path d="M0 80 Q30 70 26 105 Q50 100 46 130"/>
    <circle cx="26" cy="105" r="3" fill="#ec1e79" stroke="none"/>
  </svg>
  <svg className="ukiran absolute top-1/2 right-0 w-40 h-40" viewBox="0 0 160 160" fill="none" stroke="#7c3aed" strokeWidth="2">
    <path d="M160 60 Q130 52 134 85 Q112 82 116 110"/>
    <circle cx="134" cy="85" r="3" fill="#7c3aed" stroke="none"/>
  </svg>

  <svg className="absolute top-16 left-6 md:left-16 w-20 md:w-28 mascot-wiggle" viewBox="0 0 100 100">
    <ellipse cx="50" cy="60" rx="30" ry="34" fill="#ffd23f"/>
    <circle cx="38" cy="52" r="6" fill="#0d47a1"/><circle cx="62" cy="52" r="6" fill="#0d47a1"/>
    <circle cx="40" cy="50" r="2" fill="#fff"/><circle cx="64" cy="50" r="2" fill="#fff"/>
    <ellipse cx="30" cy="65" rx="6" ry="4" fill="#ff9db1" opacity=".8"/>
    <ellipse cx="70" cy="65" rx="6" ry="4" fill="#ff9db1" opacity=".8"/>
    <path d="M40 70 Q50 78 60 70" stroke="#0d47a1" strokeWidth="3" fill="none" strokeLinecap="round"/>
    <path d="M50 26 L50 10" stroke="#0d47a1" strokeWidth="4" strokeLinecap="round"/>
    <circle cx="50" cy="8" r="5" fill="#1d6fe0"/>
  </svg>

  <svg className="absolute bottom-10 right-6 md:right-20 w-24 md:w-32 mascot" viewBox="0 0 100 100">
    <path d="M50 5 C65 25 70 45 60 70 L40 70 C30 45 35 25 50 5Z" fill="#fff"/>
    <circle cx="50" cy="42" r="10" fill="#7c3aed"/>
    <path d="M40 70 L32 92 L45 78Z" fill="#ffd23f"/>
    <path d="M60 70 L68 92 L55 78Z" fill="#ffd23f"/>
    <ellipse cx="50" cy="84" rx="8" ry="14" fill="#ec1e79"/>
    <circle cx="46" cy="38" r="2" fill="#fff"/>
  </svg>

  <svg className="absolute -top-10 -right-10 w-32 md:w-44" viewBox="0 0 100 100">
    <g className="sun-rays"><g fill="#ffd23f"><rect x="46" y="0" width="8" height="16" rx="4"/><rect x="46" y="84" width="8" height="16" rx="4"/><rect x="0" y="46" width="16" height="8" rx="4"/><rect x="84" y="46" width="16" height="8" rx="4"/><rect x="14" y="14" width="8" height="16" rx="4" transform="rotate(45 18 22)"/><rect x="78" y="70" width="8" height="16" rx="4" transform="rotate(45 82 78)"/><rect x="70" y="14" width="8" height="16" rx="4" transform="rotate(-45 74 22)"/><rect x="14" y="70" width="8" height="16" rx="4" transform="rotate(-45 18 78)"/></g></g>
    <path d="M50 24 Q70 26 74 46 Q78 66 62 76 Q46 84 32 70 Q22 58 28 42 Q34 24 50 24Z" fill="#ffd23f"/>
    <g className="sun-eye"><circle cx="44" cy="52" r="3.5" fill="#0d47a1"/><circle cx="60" cy="50" r="3.5" fill="#0d47a1"/></g>
    <path d="M42 62 Q52 70 60 60" stroke="#0d47a1" strokeWidth="3" fill="none" strokeLinecap="round"/>
    <ellipse cx="37" cy="58" rx="4" ry="2.5" fill="#ff9db1" opacity=".8"/>
    <ellipse cx="66" cy="56" rx="4" ry="2.5" fill="#ff9db1" opacity=".8"/>
  </svg>

  <svg className="w-10 h-10 star-twinkle absolute top-1/3 right-1/4" viewBox="0 0 24 24" fill="#ffd23f"><path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
  <svg className="w-6 h-6 star-twinkle absolute top-1/4 left-1/3" style={{animationDelay:"1s"}} viewBox="0 0 24 24" fill="#fff"><path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
  <svg className="w-4 h-4 star-twinkle absolute top-[18%] left-[12%]" style={{animationDelay:".4s"}} viewBox="0 0 24 24" fill="#fff"><path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
  <svg className="w-5 h-5 star-twinkle absolute top-[55%] left-[8%]" style={{animationDelay:"1.4s"}} viewBox="0 0 24 24" fill="#ffd23f"><path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
  <svg className="w-3 h-3 star-twinkle absolute top-[42%] right-[10%]" style={{animationDelay:".8s"}} viewBox="0 0 24 24" fill="#fff"><path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
  <svg className="w-5 h-5 star-twinkle absolute top-[65%] right-[22%]" style={{animationDelay:"1.8s"}} viewBox="0 0 24 24" fill="#ffd23f"><path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
  <svg className="w-4 h-4 star-twinkle absolute top-[8%] right-[38%]" style={{animationDelay:".2s"}} viewBox="0 0 24 24" fill="#fff"><path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
  <svg className="w-3 h-3 star-twinkle absolute top-[30%] left-[6%]" style={{animationDelay:"2.1s"}} viewBox="0 0 24 24" fill="#fff"><path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>

  <span className="badge-shine font-cartoon text-sm md:text-base px-5 py-2 rounded-full border-2 border-white/70 mb-6 inline-flex items-center gap-2">
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#ffd23f"><path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
    Institut Teknologi Sepuluh Nopember
  </span>

  <h1 className="font-cartoon text-5xl md:text-8xl font-800 leading-none drop-shadow-[0_6px_0_rgba(13,71,161,0.5)]">
    INI LHO<br /><span className="text-yellow-300">ITS</span> 2027!
  </h1>

  <p className="mt-6 max-w-xl md:max-w-2xl text-base md:text-lg text-white/90 font-medium">
    Yuk kenalan sama kampus, jurusan, dan serunya jadi mahasiswa ITS. Satu minggu penuh open house, expo, kelas seru, sampai final show yang josjis abieZZZ!
  </p>

  <div className="mt-10 flex flex-col sm:flex-row gap-4">
    <a href="#acara" className="btn-outline font-cartoon font-700 text-base md:text-lg px-8 py-4 rounded-2xl inline-flex items-center gap-2">
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
      Lihat Rangkaian Acara
    </a>
    <a href="#testimoni" className="btn-testi bg-white font-cartoon font-700 text-base md:text-lg px-8 py-4 rounded-2xl inline-flex items-center gap-2">
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16v11H7l-3 3z"/></svg>
      Lihat Testimoni
    </a>
  </div>

  <svg className="w-8 h-8 mt-16 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round"><path d="M6 9l6 6 6-6"/></svg>
</section>

<section id="acara" className="relative bg-white text-teal-900 py-20 px-6 md:px-12 rounded-t-[48px] -mt-8 overflow-hidden">

  <svg className="confetti w-4 h-4 top-4 left-[8%]" style={{animationDelay:"0s"}} viewBox="0 0 24 24" fill="#ffd23f"><rect x="4" y="4" width="16" height="16" rx="3" transform="rotate(20 12 12)"/></svg>
  <svg className="confetti w-3 h-3 top-2 left-[22%]" style={{animationDelay:".8s"}} viewBox="0 0 24 24" fill="#ec1e79"><circle cx="12" cy="12" r="10"/></svg>
  <svg className="confetti w-5 h-5 top-6 left-[40%]" style={{animationDelay:"1.6s"}} viewBox="0 0 24 24" fill="#ffd23f"><path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
  <svg className="confetti w-3 h-3 top-3 left-[58%]" style={{animationDelay:".3s"}} viewBox="0 0 24 24" fill="#0d47a1"><rect x="4" y="4" width="16" height="16" rx="3" transform="rotate(-15 12 12)"/></svg>
  <svg className="confetti w-4 h-4 top-8 left-[74%]" style={{animationDelay:"1.2s"}} viewBox="0 0 24 24" fill="#7c3aed"><circle cx="12" cy="12" r="10"/></svg>
  <svg className="confetti w-4 h-4 top-2 left-[88%]" style={{animationDelay:"2s"}} viewBox="0 0 24 24" fill="#ffd23f"><path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>

  <div className="max-w-5xl mx-auto text-center mb-14 reveal">
    <span className="inline-block bg-yellow-300 text-teal-900 font-cartoon font-700 px-4 py-1 rounded-full text-sm mb-3">Jangan sampai kelewat!</span>
    <h2 className="font-cartoon text-3xl md:text-5xl font-800 text-teal-800 flex items-center justify-center gap-3">
      Rangkaian Acara
      <svg className="w-8 h-8 text-yellow-400 star-twinkle" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
    </h2>
    <p className="text-teal-600/80 mt-3">Enam momen buat kenalan sama dunia perkuliahan ITS</p>
  </div>

  <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">

    <div className="reveal card-hover bg-teal-50 border-2 border-teal-100 rounded-3xl p-6 flex gap-4">
      <div className="shrink-0 w-14 h-14 rounded-2xl bg-teal-500 flex items-center justify-center relative">
        <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
        <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-yellow-300 flex items-center justify-center text-[10px] font-cartoon font-800 text-teal-900">1</span>
      </div>
      <div>
        <p className="text-xs font-700 text-yellow-600">Kamis, 8 Januari 2027 · 09.00–11.00 WIB</p>
        <h3 className="font-cartoon text-xl font-700 text-teal-800 mt-1">Open House</h3>
        <p className="text-sm text-teal-600 mt-1">Pembukaan meriah acara, berpusat langsung di Graha ITS.</p>
      </div>
    </div>

    <div className="reveal card-hover bg-yellow-50 border-2 border-yellow-100 rounded-3xl p-6 flex gap-4">
      <div className="shrink-0 w-14 h-14 rounded-2xl bg-yellow-400 flex items-center justify-center relative">
        <svg className="w-7 h-7 text-teal-900" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
        <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center text-[10px] font-cartoon font-800 text-white">2</span>
      </div>
      <div>
        <p className="text-xs font-700 text-pink-600">Kamis–Jumat, 8–9 Januari 2027 · 13.00–17.00 WIB</p>
        <h3 className="font-cartoon text-xl font-700 text-teal-800 mt-1">ITS Expo / Pameran</h3>
        <p className="text-sm text-teal-600 mt-1">Jelajahi stan seru dari berbagai fakultas dan departemen.</p>
      </div>
    </div>

    <div className="reveal card-hover bg-teal-50 border-2 border-teal-100 rounded-3xl p-6 flex gap-4">
      <div className="shrink-0 w-14 h-14 rounded-2xl bg-teal-500 flex items-center justify-center relative">
        <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
        <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-yellow-300 flex items-center justify-center text-[10px] font-cartoon font-800 text-teal-900">3</span>
      </div>
      <div>
        <p className="text-xs font-700 text-yellow-600">Sabtu, 10 Januari 2027 · 07.00–08.30 WIB</p>
        <h3 className="font-cartoon text-xl font-700 text-teal-800 mt-1">One Day Lecture</h3>
        <p className="text-sm text-teal-600 mt-1">Rasakan serunya kuliah singkat bareng dosen di tiap departemen.</p>
      </div>
    </div>

    <div className="reveal card-hover bg-yellow-50 border-2 border-yellow-100 rounded-3xl p-6 flex gap-4">
      <div className="shrink-0 w-14 h-14 rounded-2xl bg-yellow-400 flex items-center justify-center relative">
        <svg className="w-7 h-7 text-teal-900" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
        <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center text-[10px] font-cartoon font-800 text-white">4</span>
      </div>
      <div>
        <p className="text-xs font-700 text-pink-600">Sabtu, 10 Januari 2027 · 08.30–10.30 WIB</p>
        <h3 className="font-cartoon text-xl font-700 text-teal-800 mt-1">Technocraft Playhouse</h3>
        <p className="text-sm text-teal-600 mt-1">Workshop dan mini praktikum interaktif di masing-masing departemen.</p>
      </div>
    </div>

    <div className="reveal card-hover bg-teal-50 border-2 border-teal-100 rounded-3xl p-6 flex gap-4">
      <div className="shrink-0 w-14 h-14 rounded-2xl bg-teal-500 flex items-center justify-center relative">
        <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
        <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-yellow-300 flex items-center justify-center text-[10px] font-cartoon font-800 text-teal-900">5</span>
      </div>
      <div>
        <p className="text-xs font-700 text-yellow-600">Sabtu, 10 Januari 2027 · 10.30–11.30 WIB</p>
        <h3 className="font-cartoon text-xl font-700 text-teal-800 mt-1">End Point</h3>
        <p className="text-sm text-teal-600 mt-1">Kunjungan penutup yang ASIKKK di tiap fakultas.</p>
      </div>
    </div>

    <div className="reveal card-hover bg-yellow-50 border-2 border-yellow-100 rounded-3xl p-6 flex gap-4">
      <div className="shrink-0 w-14 h-14 rounded-2xl bg-yellow-400 flex items-center justify-center relative">
        <svg className="w-7 h-7 text-teal-900" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
        <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center text-[10px] font-cartoon font-800 text-white">6</span>
      </div>
      <div>
        <p className="text-xs font-700 text-pink-600">Minggu, 11 Januari 2027</p>
        <h3 className="font-cartoon text-xl font-700 text-teal-800 mt-1">Final Show / Try Out</h3>
        <p className="text-sm text-teal-600 mt-1">Puncak perayaan penutup rangkaian INI LHO ITS 2027!</p>
      </div>
    </div>

  </div>
</section>

<section id="testimoni" className="relative py-20 px-6 md:px-12 overflow-hidden" style={{background:"repeating-linear-gradient(135deg, rgba(255,179,217,.4) 0px, rgba(255,179,217,.4) 40px, rgba(255,246,181,.4) 40px, rgba(255,246,181,.4) 80px, rgba(255,255,255,.55) 80px, rgba(255,255,255,.55) 120px, rgba(178,235,222,.4) 120px, rgba(178,235,222,.4) 160px, rgba(255,255,255,.55) 160px, rgba(255,255,255,.55) 200px, rgba(216,196,255,.4) 200px, rgba(216,196,255,.4) 240px), linear-gradient(180deg,#eafaf6 0%, #f5fbfa 100%)"}}>

  <svg className="ukiran absolute top-0 left-0 w-52 h-36" viewBox="0 0 200 140" fill="none" stroke="#0d9488" strokeWidth="2">
    <path d="M0 15 Q40 8 35 35 Q65 30 60 55"/>
    <circle cx="35" cy="35" r="3" fill="#0d9488" stroke="none"/>
  </svg>
  <svg className="ukiran absolute top-0 right-0 w-52 h-36" viewBox="0 0 200 140" fill="none" stroke="#ffd23f" strokeWidth="2">
    <path d="M200 15 Q160 8 165 35 Q135 30 140 55"/>
    <circle cx="165" cy="35" r="3" fill="#ffd23f" stroke="none"/>
  </svg>

  <svg className="w-9 h-9 star-twinkle absolute top-8 left-[20%]" viewBox="0 0 24 24" fill="#ffd23f"><path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
  <svg className="w-6 h-6 star-twinkle absolute top-16 right-[15%]" style={{animationDelay:".9s"}} viewBox="0 0 24 24" fill="#7c3aed"><path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>

  <svg className="mascot absolute top-10 left-[8%] w-14 md:w-16" style={{animationDelay:".3s"}} viewBox="0 0 100 60" fill="#ec1e79">
    <path d="M10 40 Q18 22 28 34 Q34 20 42 32 Q30 30 26 38 Q20 30 10 40Z"/>
    <path d="M55 30 Q63 12 73 24 Q79 10 87 22 Q75 20 71 28 Q65 20 55 30Z"/>
  </svg>
  <svg className="mascot absolute top-24 right-[10%] w-10 md:w-12" style={{animationDelay:"1.2s"}} viewBox="0 0 100 60" fill="#7c3aed">
    <path d="M10 40 Q18 22 28 34 Q34 20 42 32 Q30 30 26 38 Q20 30 10 40Z"/>
  </svg>

  <svg className="confetti w-4 h-4 top-4 left-[42%]" style={{animationDelay:".5s"}} viewBox="0 0 24 24" fill="#ffd23f"><path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
  <svg className="confetti w-3 h-3 top-2 left-[62%]" style={{animationDelay:"1.7s"}} viewBox="0 0 24 24" fill="#ec1e79"><circle cx="12" cy="12" r="10"/></svg>
  <svg className="confetti w-3 h-3 top-6 left-[24%]" style={{animationDelay:"1.1s"}} viewBox="0 0 24 24" fill="#7c3aed"><rect x="4" y="4" width="16" height="16" rx="3" transform="rotate(20 12 12)"/></svg>
  <svg className="confetti w-4 h-4 top-3 left-[80%]" style={{animationDelay:"2s"}} viewBox="0 0 24 24" fill="#0d9488"><path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>

  <div className="max-w-4xl mx-auto text-center mb-14 reveal relative z-10">
    <span className="inline-block bg-white text-purple-700 font-cartoon font-700 px-4 py-1 rounded-full text-sm mb-3 shadow">Kata mereka</span>
    <h2 className="font-cartoon text-3xl md:text-5xl font-800 text-teal-800 flex items-center justify-center gap-3">
      Testimoni Peserta
      <svg className="w-8 h-8 star-twinkle" viewBox="0 0 24 24" fill="#ffd23f"><path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
    </h2>
  </div>

  <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 relative z-10">
    <div className="reveal card-hover bg-white text-teal-800 rounded-3xl p-6 relative shadow-lg">
      <div className="flex gap-1 mb-3">
        <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
        <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
        <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
        <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
        <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
      </div>
      <p className="text-sm text-pink-600">"Serunya kebayang banget, jadi ga sabar masuk ITS tahun depan!"</p>
      <p className="font-cartoon font-700 mt-3 text-sm">— Rani, SMAN 5</p>
    </div>
    <div className="reveal card-hover bg-white text-teal-800 rounded-3xl p-6 relative shadow-lg md:mt-6">
      <div className="flex gap-1 mb-3">
        <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
        <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
        <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
        <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
        <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
      </div>
      <p className="text-sm text-pink-600">"Technocraft Playhouse-nya keren, langsung praktik bukan cuma dengar!"</p>
      <p className="font-cartoon font-700 mt-3 text-sm">— Dimas, SMKN 2</p>
    </div>
    <div className="reveal card-hover bg-white text-teal-800 rounded-3xl p-6 relative shadow-lg">
      <div className="flex gap-1 mb-3">
        <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
        <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
        <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
        <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
        <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg>
      </div>
      <p className="text-sm text-pink-600">"Final Show-nya GOKILLLLL, penutup yang bikin makin cinta ITS!"</p>
      <p className="font-cartoon font-700 mt-3 text-sm">— Alya, SMAN 1</p>
    </div>
  </div>

  <div className="relative h-24 md:h-28 mt-10">
    <svg className="absolute bottom-0 left-[6%] w-14 md:w-16" viewBox="0 0 60 90" fill="none">
      <rect x="26" y="40" width="8" height="50" rx="3" fill="#8a5a2b"/>
      <circle cx="30" cy="30" r="22" fill="#0d9488"/>
      <circle cx="16" cy="20" r="4" fill="#ffd23f" opacity=".9"/>
    </svg>
    <svg className="absolute bottom-0 right-[10%] w-10 md:w-12" viewBox="0 0 60 90" fill="none">
      <rect x="26" y="45" width="8" height="45" rx="3" fill="#8a5a2b"/>
      <circle cx="30" cy="34" r="18" fill="#34d399"/>
    </svg>

    <svg className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 md:w-40" viewBox="0 0 120 120">
      <ellipse cx="60" cy="118" rx="26" ry="6" fill="#000" opacity=".12"/>
      <path className="cat-tail" d="M82 90 Q104 80 100 55 Q98 45 90 48" stroke="#ffd23f" strokeWidth="9" fill="none" strokeLinecap="round"/>
      <ellipse cx="55" cy="88" rx="34" ry="30" fill="#ffd23f"/>
      <path d="M28 68 L18 42 L42 58Z" fill="#ffd23f"/>
      <path d="M82 68 L92 42 L68 58Z" fill="#ffd23f"/>
      <path d="M28 68 L22 50 L38 60Z" fill="#ff9db1"/>
      <path d="M82 68 L88 50 L72 60Z" fill="#ff9db1"/>
      <g className="cat-eye"><ellipse cx="43" cy="82" rx="3.5" ry="5" fill="#0d47a1"/><ellipse cx="67" cy="82" rx="3.5" ry="5" fill="#0d47a1"/></g>
      <ellipse cx="37" cy="92" rx="5" ry="3" fill="#ff9db1" opacity=".8"/>
      <ellipse cx="73" cy="92" rx="5" ry="3" fill="#ff9db1" opacity=".8"/>
      <path d="M50 92 Q55 96 60 92" stroke="#0d47a1" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M20 88 Q6 85 4 90 M20 92 Q5 92 4 96" stroke="#e6ac00" strokeWidth="2" strokeLinecap="round"/>
      <path d="M90 88 Q104 85 106 90 M90 92 Q105 92 106 96" stroke="#e6ac00" strokeWidth="2" strokeLinecap="round"/>
      <ellipse className="cat-paw" cx="42" cy="118" rx="9" ry="8" fill="#ffd23f"/>
      <ellipse cx="70" cy="118" rx="9" ry="8" fill="#ffd23f"/>
    </svg>
  </div>
</section>

<footer className="bg-teal-900 text-teal-100 text-center py-8 text-sm">
  INI LHO ITS 2027 · Institut Teknologi Sepuluh Nopember
</footer>
    </div>
  );
}
