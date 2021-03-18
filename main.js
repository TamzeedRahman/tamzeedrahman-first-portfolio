//animation
let typed = new Typed(".typing",{
    strings:["Developer", "Gamer", "Keycap Artisan", "Mechanical Keyboard Crafter", "Pursuit Fellow", "Hardware Enthusiast"],
    typeSpeed: 100,
    backSpeed:60,
    loop:true
})

//name change
myname.addEventListener('mouseenter',() => myname.innerText = ' Tamzeed Alvi Rahman')
myname.addEventListener('mouseleave',() => myname.innerText = 'Tamzeed Rahman')

//background color changing

const btn = document.querySelector(".btn-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.toggle("dark-theme");
} else if (currentTheme == "light") {
  document.body.classList.toggle("light-theme");
}

btn.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
  let hello = document.querySelectorAll("#one")
  hello.classList.toggle("light-theme");
    var theme = document.body.classList.contains("light-theme")
      ? "light"
      : "dark";
  } else {
    document.body.classList.toggle("dark-theme");
    var theme = document.body.classList.contains("dark-theme")
      ? "dark"
      : "light";
  }
  localStorage.setItem("theme", theme);
});
