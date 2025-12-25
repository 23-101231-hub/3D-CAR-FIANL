const modelViewer = document.querySelector("#carModel");
const colorText = document.querySelector(".color-text");
const circles = document.querySelectorAll(".circle, .circle2, .circle3, .circle4, .circle5");

function setActiveCircle(selected) {
  circles.forEach(c => c.classList.remove("active"));
  selected.classList.add("active");
}

setActiveCircle(document.querySelector(".circle2"));

circles.forEach(circle => {
  circle.addEventListener("click", () => {
    const modelSrc = circle.dataset.model;
    const name = circle.dataset.name;

    if (!modelSrc) return;

    modelViewer.src = modelSrc;
    colorText.textContent = name;

    setActiveCircle(circle);
  });
});


const specsData = [
  {
    img: "imgs/Container-1.png",
    label: "Horsepower",
    value: "670 HP"
  },
  {
    img: "imgs/Container-2.png",
    label: "Acceleration",
    value: "0-60 in 2.9s"
  },
  {
    img: "imgs/Container-3.png",
    label: "Top Speed",
    value: "200 mph"
  },
  {
    img: "imgs/Container-4.png",
    label: "Range",
    value: "350 miles"
  },
  {
    img: "imgs/Container-5.png",
    label: "Warranty",
    value: "8 years"
  },
  {
    img: "imgs/Container-6.png",
    label: "Delivery",
    value: "4-8 weeks"
  }
];


const additionalSpecsData = [
  {
    name1: "Seating Capacity",
    detail1: "5 Adults",
    name2: "Cargo Space",
    detail2: "28 cu ft"
  },
  {
    name1: "Drive Type",
    detail1: "All Wheel Drive",
    name2: "Battery Size",
    detail2: "100 kWh"
  },
  {
    name1: "Charge Time (Fast)",
    detail1: "20 minutes (80%)",
    name2: "Weight",
    detail2: "4,850 lbs"
  }
];


const featuresData = [
  {
    img: "imgs/Container.png",
    text: "Dual Motor All-Wheel Drive"
  },
  {
    img: "imgs/Container.png",
    text: "Adaptive Air Suspension"
  },
  {
    img: "imgs/Container.png",
    text: "Carbon Fiber Body"
  },
  {
    img: "imgs/Container.png",
    text: "Advanced Autopilot"
  },
  {
    img: "imgs/Container.png",
    text: "Premium Sound System"
  },
  {
    img: "imgs/Container.png",
    text: "360° Camera System"
  }
];


let specsOutput = "";
for (let i = 0; i < specsData.length; i++) {
  specsOutput += `
    <div class="spec-card">
      <img src="${specsData[i].img}" alt="">
      <div class="spec-label">${specsData[i].label}</div>
      <div class="spec-value">${specsData[i].value}</div>
    </div>
  `;
}
document.querySelector(".specs-grid").innerHTML = specsOutput;


let additionalSpecsOutput = "";
for (let i = 0; i < additionalSpecsData.length; i++) {
  additionalSpecsOutput += `
    <div class="spec-row">
      <span class="spec-name">${additionalSpecsData[i].name1}</span>
      <span class="spec-detail">${additionalSpecsData[i].detail1}</span>
      <span class="spec-name">${additionalSpecsData[i].name2}</span>
      <span class="spec-detail">${additionalSpecsData[i].detail2}</span>
    </div>
  `;
}
document.querySelector(".specs-table").innerHTML = additionalSpecsOutput;


let featuresOutput = "";
for (let i = 0; i < featuresData.length; i++) {
  featuresOutput += `
    <div class="feature-card">
      <img src="${featuresData[i].img}" alt="">
      <span class="feature-text">${featuresData[i].text}</span>
    </div>
  `;
}
document.querySelector(".features-grid").innerHTML = featuresOutput;



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