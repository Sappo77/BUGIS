function tampilkanMenu() {
  const menu = document.getElementById('menuBurger')
  menu.style.display = 'flex'
}

function sembunyikanMenu(){
  const menu = document.getElementById('menuBurger')
  menu.style.display = 'none'
}

const tombol = document.querySelector(".pembungkus button");

tombol.addEventListener("click", function() {
  alert("Ini Merupakan Halaman Kamus Bahasa Bugis!");
});
