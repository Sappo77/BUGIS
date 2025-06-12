function tampilkanMenu() {
  const menu = document.getElementById('menuBurger')
  menu.style.display = 'flex'
}

function sembunyikanMenu(){
  const menu = document.getElementById('menuBurger')
  menu.style.display = 'none'
}

// Ambil semua tombol "Lihat Detail"
const tombol = document.querySelectorAll(".pembungkus2 a button")

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
