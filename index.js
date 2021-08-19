var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("active");
  }
  slideIndex++;
  if (slideIndex > slides.length) {
      slideIndex = 1
    }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].classList.add("active")
  setTimeout(showSlides, 10000); // Change image every 2 seconds
}

let navRight = document.querySelector(".nav-right");
let hamburgerBtn = document.querySelector(".hamburger-btn");

function toggleMenu(){
  if(hamburgerBtn.classList.length<2){
    hamburgerBtn.classList.add("hamburger-btn-clicked")
    navRight.classList.remove("nav-hidden")
  }
  else {
    hamburgerBtn.classList.remove("hamburger-btn-clicked")
    navRight.classList.add("nav-hidden")
  }
  console.log(hamburgerBtn.classList)
}

function hideMenuOnSmallScreen(){
  if(window.innerWidth<=640){
    navRight.classList.add("nav-hidden")
  }
}
