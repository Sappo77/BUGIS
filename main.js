// Ambil semua tombol "Lihat Detail"
const tombol = document.querySelectorAll("article.kotak a button")

// Tambahkan event listener ke setiap tombol
tombol.forEach(function(button) {
  button.addEventListener("click", function(event) {
    event.preventDefault(); // Mencegah aksi default jika dibutuhkan

    // Ambil elemen <a> di dalam button
    const a = button.closest("a")
    const url = a.getAttribute("href")

    // Buka halaman baru
    window.open(url, "_blank") // Membuka di tab baru
  });
});
