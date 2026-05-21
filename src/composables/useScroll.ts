import { ref, onMounted, onUnmounted } from 'vue'

export function useScroll() {
  // State reaktif untuk menyimpan posisi scroll Y saat ini
  const scrolly = ref(0)

  // Fungsi untuk memperbarui nilai scrolly ketika halaman di-scroll
  const updateScroll = () => {
    scrolly.value = window.scrollY
  }

  // Pasang event listener saat komponen mulai muncul di layar (mount)
  onMounted(() => {
    window.addEventListener('scroll', updateScroll)
    // Jalankan sekali di awal untuk mendeteksi posisi awal jika halaman di-refresh
    updateScroll()
  })

  // Bersihkan event listener saat komponen dihancurkan (unmount) agar tidak bocor memorinya
  onUnmounted(() => {
    window.removeEventListener('scroll', updateScroll)
  })

  // Kembalikan variabel scrolly agar bisa dipakai di komponen Vue kamu
  return {
    scrolly,
  }
}
