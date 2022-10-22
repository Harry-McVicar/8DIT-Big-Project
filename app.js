/*Hides navigation bar as the user scrolls down while revealing it as they scroll up.*/

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos) {
    document.getElementById("nav-container-fade").style.display = "none";
  }
  else {
    document.getElementById("nav-container-fade").style.display = "block";
  }
  prevScrollpos = currentScrollPos;
};


/*Navigation toggle at small screen size.*/

const links = document.querySelector(".links");

function openNav() {
  links.classList.toggle("showlinks");
}


/*Tabs System*/

const btns = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".content");
const container = document.querySelector(".container");

container.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    contents.forEach(function (content) {
      content.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});


/*Image Slider*/

const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

let counter = 0;

nextBtn.addEventListener("click", function () {
  counter++;
  carousel();
});

prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
});

function carousel() {
  if (counter === slides.length) {
    counter = 0;
  }

  if (counter < 0) {
    counter = slides.length - 1;
  }

  slides.forEach(function (slide) {
    slide.style.transform = 'translateY('+ (counter*-100) +'%)';
  });
}
