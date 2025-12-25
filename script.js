const burger = document.getElementById("burger");
const nav = document.querySelector(".nav-text");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
});



const navLinks = document.querySelectorAll(".nav-text a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});




const whySection = document.querySelector(".why");

let whyShown = false;

whySection.addEventListener("mouseenter", () => {
  if (!whyShown) {
    whySection.classList.add("show");
    whyShown = true;
  }
});


const preloader = document.getElementById("preloader");


const MIN_TIME = 2200; 
const MAX_TIME = 3200; 


const start = Date.now();

function hidePreloader(){
  if (!preloader) return;
  preloader.classList.add("hide");
}

window.addEventListener("load", () => {
  const elapsed = Date.now() - start;
  const remaining = Math.max(MIN_TIME - elapsed, 0);

  setTimeout(hidePreloader, remaining);
  setTimeout(hidePreloader, MAX_TIME);
});


const searchIcon = document.getElementById("searchIcon");
const searchBox = document.querySelector(".search-box");
const searchInput = document.getElementById("searchInput");


const allCards = document.querySelectorAll(
  ".car-card, .m-card, .m-card2"
);

searchIcon.addEventListener("click", () => {
  searchBox.classList.toggle("active");
  searchInput.focus();
});

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  allCards.forEach(card => {
    const name =
      card.querySelector("h3")?.innerText.toLowerCase() || "";

    card.style.display = name.includes(value) ? "block" : "none";
  });
});
