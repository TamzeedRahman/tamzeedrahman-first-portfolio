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

// I'm a bit confused by your approach to tracking color scheme.
// Let me know if this is your intent (this is what makes most sense to me!):
  // If localStorage has the theme set, use that theme. This should override other considerations below.
  // Otherwise, check if user prefers dark theme.
    // If yes: set dark theme and store in localStorage
    // If no: set light theme and store in localStorage
  // If theme toggle button is hit, toggle theme and update localStorage.


const btn = document.querySelector(".btn-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Because of the error thrown by the click handler, localStorage.setItem never gets called
const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.toggle("dark-theme");
} else if (currentTheme == "light") {
  document.body.classList.toggle("light-theme");
}

btn.addEventListener("click", function () {
  if (prefersDarkScheme.matches) { // I'm confused by this if statement: shouldn't you care about localStorage here, not the systems settings?
      // Why toggle? What if the user prefers dark theme and 'light-theme' isn't set on the body?
      // would .remove be a better choice than .toggle?
    document.body.classList.toggle("light-theme");
      // The line below is throwing an error when I try to toggle the theme
      // Hint: what does querySelectorAll return?
  let hello = document.querySelectorAll("#one")
  hello.classList.toggle("light-theme");
      // Instead of using var to avoid block scoping rules, try declaring
      // 'theme' before the if/else blocks!
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
