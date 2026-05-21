<script setup lang="ts">
import { ref } from 'vue'
import { useScroll } from '@/composables/useScroll'

const { scrolly } = useScroll()

const isMobileMenuOpen = ref(false)
const activeMenu = ref('Beranda')

const menuItems = [
  { name: 'Beranda', href: '#home' },
  { name: 'Layanan', href: '#layanan' },
  { name: 'Harga', href: '#harga' },
  { name: 'Kontak', href: '#contact' },
]

// Fungsi sakti biar gak eror Vite lagi
const handleMenuClick = (name: string) => {
  activeMenu.value = name
  isMobileMenuOpen.value = false
}

const toggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
    <nav
      :class="[
        'fixed top-0 w-full z-[999] transition-all duration-300 px-4 md:px-12 flex items-center justify-between',
        scrolly > 20 || isMobileMenuOpen
          ? 'bg-black/40  shadow-md h-20'
          : 'bg-linear-to-tr from-blue-500/50 to-black/50 h-24 text-white',
      ]"
    >
      <div class="max-w-7xl mx-auto flex justify-between items-center w-full h-full">
        <div class="flex items-center gap-3">
          <div
            class="h-10 w-10 bg-white rounded-br-xl rounded-tl-xl flex items-center justify-center font-black text-blue-900 text-xl shadow-md"
          >
            <img src="./assets/logo3.svg" alt="AnkasaSSH Logo" class="h-6 w-6 object-contain" />
          </div>
          <div class="flex flex-col leading-tight border-l-2 pl-4 border-blue-400/50">
            <span
              class="text-lg md:text-xl font-bold tracking-tighter text-white uppercase leading-none"
              >Ankasa<span class="text-blue-500">SSH</span></span
            >
            <span class="text-[9px] md:text-[10px] text-white font-medium uppercase opacity-80"
              >Premium Tunneling Provider</span
            >
          </div>
        </div>

        <div class="hidden lg:flex items-center gap-10">
          <a
            v-for="item in menuItems"
            :key="item.name"
            :href="item.href"
            @click="handleMenuClick(item.name)"
            :class="[
              'text-sm font-bold transition-all duration-300 relative py-2',
              scrolly > 20
                ? activeMenu === item.name
                  ? 'text-blue-900'
                  : 'text-white/80 hover:text-white'
                : 'text-white',
            ]"
          >
            {{ item.name }}
            <span
              v-if="activeMenu === item.name"
              class="absolute bottom-0 left-0 w-full h-1 bg-current rounded-full"
            ></span>
          </a>
        </div>

        <div class="flex items-center gap-3">
          <a
            href="https://wa.me/6285928974117"
            class="hidden sm:block px-6 py-2.5 bg-white text-black font-bold rounded-lg hover:bg-blue-800 shadow-xl text-sm hover:scale-105 hover:text-white transition-all"
            >Berlangganan Sekarang</a
          >

          <button @click="toggleMenu" class="lg:hidden p-2 relative z-[1000]">
            <svg
              v-if="!isMobileMenuOpen"
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-10"
        enter-to-class="opacity-100 translate-y-0"
      >
        <div
          v-if="isMobileMenuOpen"
          class="absolute top-full left-0 w-full bg-linear-to-br from-black/99 to-blue-900/90 shadow-2xl border-t border-slate-100 lg:hidden"
        >
          <div class="flex flex-col p-6 gap-4">
            <a
              v-for="item in menuItems"
              :key="item.name"
              @click="handleMenuClick(item.name)"
              :href="item.href"
              class="text-lg font-bold p-3 rounded-br-lg rounded-tl-lg transition-all duration-300"
              :class="
                activeMenu === item.name
                  ? 'border-b-2 border-blue-500 bg-blue-50 text-blue-900'
                  : 'text-white/80 hover:text-white'
              "
            >
              {{ item.name }}
            </a>
            <a
              href="https://wa.me/6285928974117"
              class="px-6 py-2.5 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-700 shadow-lg text-sm transition-all text-center"
              >Berlangganan Sekarang</a
            >
          </div>
        </div>
      </transition>
    </nav>

    <header
      id="home"
      class="relative pt-32 pb-32 px-6 bg-linear-to-br from-black to-blue-900 flex flex-col items-center justify-center text-center overflow-hidden min-h-screen"
    >
      <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <video
          src="./assets/bg.webm"
          alt="AnkasaSSH Background"
          class="w-full h-full object-cover opacity-30 filter grayscale"
          autoplay
          loop
          muted
          playsinline
        ></video>
      </div>

      <div class="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <h1
          class="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-none max-w-3xl drop-shadow-md"
        >
          Akses Internet Cepat Tanpa Tanpa Kuota & Pulsa
        </h1>

        <p class="text-lg md:text-xl font-medium mt-6 text-slate-200 max-w-2xl">
          Harga mulai dari <span class="text-red-500 font-bold">Rp15.000/bulan</span>. Promo untuk
          yang membawa 5 teman gratis selama sebulan
        </p>

        <p class="text-sm mb-4 md:text-base font-normal mt-6 text-slate-200 max-w-xl">
          Siap berselancar? Gabung dengan grup whatsapp kami untuk mendapatkan update terbaru, tips,
          dan berbagi internet gratisan dan dukungan langsung dari tim kami.
        </p>
        <a
          href="https://chat.whatsapp.com/HwtmI7S4Lkk8U1vac1YcQy?s=cl&p=a&mlu=0"
          class="px-6 py-2.5 bg-white text-black font-bold rounded-full hover:bg-blue-500 shadow-lg text-sm hover:shadow-blue-500/50 hover:scale-105 transition-all"
          >Gabung Grup WhatsApp</a
        >
        <div class="mt-6 flex flex-wrap justify-center gap-6 text-xs font-semibold text-slate-400">
          <div class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              class="w-4 h-4 text-blue-500"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            Unlimited Bandwidth
          </div>
          <div class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              class="w-4 h-4 text-blue-500"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            Support HTTP Custom (Opok)
          </div>
          <div class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              class="w-4 h-4 text-blue-500"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            High Speed UDP Server
          </div>
        </div>
      </div>
    </header>
  </div>

  <section id="layanan" class="py-32 px-6 bg-linear-to-tr from-black to-blue-900">
    <div class="max-w-7xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Layanan Kami</h2>
      <p class="text-lg text-gray-300 mb-12">
        Kami menyediakan berbagai layanan tunneling premium untuk memenuhi kebutuhan internet Anda.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          class="relative rounded-br-2xl rounded-tl-2xl shadow-xl p-8 flex flex-col items-center justify-center min-h-[320px] transition-all duration-300 hover:scale-105 hover:shadow-blue-500/10 overflow-hidden group border border-slate-800"
        >
          <img
            src="./assets/gambar.webp"
            alt="SSH Background"
            class="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-500"
          />
          <div
            class="absolute inset-0 bg-linear-to-b from-slate-600/90 via-blue-900/80 to-slate-950/90 z-0"
          ></div>

          <div class="relative z-10 flex flex-col items-center text-center">
            <h3 class="text-xl font-black text-white mb-3 tracking-tight">Internet Unlimited</h3>
            <p class="text-slate-300 text-sm leading-relaxed">
              Akses internet cepat, unlimited dan aman dengan layanan yang kami sediakan, tanpa
              menggunakan kuota dan pulsa.
            </p>
          </div>
        </div>

        <div
          class="relative rounded-br-2xl rounded-tl-2xl shadow-xl p-8 flex flex-col items-center justify-center min-h-[320px] transition-all duration-300 hover:scale-105 hover:shadow-blue-500/10 overflow-hidden group border border-slate-800"
        >
          <img
            src="./assets/gambar.webp"
            alt="UDP Background"
            class="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-500"
          />
          <div
            class="absolute inset-0 bg-linear-to-b from-slate-600/90 via-blue-900/80 to-slate-950/90 z-0"
          ></div>

          <div class="relative z-10 flex flex-col items-center text-center">
            <h3 class="text-xl font-black text-white mb-3 tracking-tight">VPN Pribadi</h3>
            <p class="text-slate-300 text-sm leading-relaxed">
              Lindungi privasi online Anda dengan layanan VPN pribadi kami yang aman dan cepat, dan
              nikmati kebebasan berselancar tanpa batasan.
            </p>
          </div>
        </div>

        <div
          class="relative rounded-br-2xl rounded-tl-2xl shadow-xl p-8 flex flex-col items-center justify-center min-h-[320px] transition-all duration-300 hover:scale-105 hover:shadow-blue-500/10 overflow-hidden group border border-slate-800"
        >
          <img
            src="./assets/gambar.webp"
            alt="Support Background"
            class="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-500"
          />
          <div
            class="absolute inset-0 bg-linear-to-b from-slate-600/90 via-blue-900/80 to-slate-950/90 z-0"
          ></div>

          <div class="relative z-10 flex flex-col items-center text-center">
            <h3 class="text-xl font-black text-white mb-3 tracking-tight">Dukungan 24/7</h3>
            <p class="text-slate-300 text-sm leading-relaxed">
              Tim dukungan kami siap membantu Anda kapan saja, 24/7, untuk memastikan konektivitas
              internet gratisanmu berjalan lancar.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="harga" class="py-32 px-6 bg-linear-to-tr from-black to-blue-900">
    <div class="max-w-7xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Harga Kami</h2>
      <p class="text-lg text-gray-300 mb-12">
        Pilih paket yang sesuai dengan kebutuhan Anda. Kami menawarkan harga yang kompetitif untuk
        layanan premium kami.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          class="rounded-3xl shadow-xl p-8 flex flex-col items-center justify-center min-h-[320px] transition-all duration-300 hover:scale-105 hover:shadow-blue-500/10 overflow-hidden group border border-slate-800"
        >
          <h3 class="text-xl font-black text-white mb-3 tracking-tight">Paket Basic</h3>
          <p class="text-slate-300 text-sm leading-relaxed mb-6">
            Akses internet cepat tanpa menggunakan kuota dan pulsa dengan layanan kami dan dukungan
            langsung dari tim kami.
          </p>
          <div class="text-2xl font-bold text-red-600 mb-4">
            Rp15.000<span class="text-sm font-normal text-slate-400">/bulan</span>
          </div>
        </div>
        <div
          class="rounded-3xl shadow-xl p-8 flex flex-col items-center justify-center min-h-[320px] transition-all duration-300 hover:scale-105 hover:shadow-blue-500/10 overflow-hidden group border border-slate-800"
        >
          <h3 class="text-xl font-black text-white mb-3 tracking-tight">Paket Basic</h3>
          <p class="text-slate-300 text-sm leading-relaxed mb-6">
            Akses internet cepat tanpa menggunakan kuota dan pulsa dengan layanan kami dan dukungan
            langsung dari tim kami.
          </p>
          <div class="text-2xl font-bold text-red-600 mb-4">
            Rp15.000<span class="text-sm font-normal text-slate-400">/bulan</span>
          </div>
        </div>
        <div
          class="rounded-3xl shadow-xl p-8 flex flex-col items-center justify-center min-h-[320px] transition-all duration-300 hover:scale-105 hover:shadow-blue-500/10 overflow-hidden group border border-slate-800"
        >
          <h3 class="text-xl font-black text-white mb-3 tracking-tight">Paket Basic</h3>
          <p class="text-slate-300 text-sm leading-relaxed mb-6">
            Akses internet cepat tanpa menggunakan kuota dan pulsa dengan layanan kami dan dukungan
            langsung dari tim kami.
          </p>
          <div class="text-2xl font-bold text-red-600 mb-4">
            Rp15.000<span class="text-sm font-normal text-slate-400">/bulan</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="contact" class="py-32 px-6 bg-linear-to-tr from-black to-blue-900">
    <div class="max-w-7xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Kontak Kami</h2>
      <p class="text-lg text-gray-300 mb-12">
        Punya pertanyaan atau butuh bantuan? Jangan ragu untuk menghubungi kami. Tim dukungan kami
        siap membantu Anda 24/7.
      </p>

      <div class="flex flex-col md:flex-row justify-center items-center gap-8">
        <a
          href="https://wa.me/6285928974117"
          class="px-6 py-2.5 bg-white text-black font-bold rounded-lg hover:bg-blue-800 hover:text-white hover:scale-105 shadow-lg text-sm transition-all"
          >Hubungi via WhatsApp</a
        >
        <a
          href="https://t.me/Ankasa12"
          class="px-6 py-2.5 bg-white text-black font-bold rounded-lg hover:bg-blue-800 hover:text-white hover:scale-105 shadow-lg text-sm transition-all"
          >Hubungi via Telegram</a
        >
      </div>
    </div>
  </section>
  <footer class="py-6 bg-slate-900 text-center text-sm text-slate-400">
    &copy; 2026 AnkasaSSH. All rights reserved.
  </footer>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap');
html {
  scroll-behavior: smooth;
}
body {
  font-family: 'Inter', sans-serif;
  background-color: white;
}

.animate-spin-slow {
  animation: spin 8s linear infinite;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
