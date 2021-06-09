//animation
let typed = new Typed(".typing", {
  strings: [
    "Developer",
    "Gamer",
    "Keycap Artisan",
    "Mechanical Keyboard Crafter",
    "Pursuit Fellow",
    "Hardware Enthusiast",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

//name change
myname.addEventListener(
  "mouseenter",
  () => (myname.innerText = " Tamzeed Alvi Rahman")
);
myname.addEventListener(
  "mouseleave",
  () => (myname.innerText = "Tamzeed Rahman")
);
