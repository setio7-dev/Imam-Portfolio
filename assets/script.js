  // responsive navbar
  document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector('.navbar');
    const listIcon = document.querySelector('.navbar-list');
  
    listIcon.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });
  });

// cards product
// cards1
const images = [
  "assets/img/product/t-shirt/card1.png",
  "assets/img/product/t-shirt/card2.png",
  "assets/img/product/t-shirt/card3.png",
  "assets/img/product/t-shirt/card4.png",
  "assets/img/product/t-shirt/card5.png",
  "assets/img/product/t-shirt/card6.png",
  "assets/img/product/t-shirt/card7.png"
];

let currentIndex = 0;

function updateImage(direction) {
  const imgElement = document.getElementById("cardImage");
  imgElement.style.opacity = 0;

  if (direction === "next") {
      imgElement.style.transform = "translateX(100%)";
      setTimeout(() => {
        imgElement.style.transition = "none";
        imgElement.src = images[currentIndex];
        imgElement.style.transform = "translateX(-100%)";
        imgElement.style.opacity = 0;
        setTimeout(() => {
            imgElement.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
            imgElement.style.opacity = 1;
            imgElement.style.transform = "translateX(0%)";
        }, 50);
    }, 500);
  } else {
      imgElement.style.transform = "translateX(-100%)";
      setTimeout(() => {
        imgElement.style.transition = "none";
        imgElement.src = images[currentIndex];
        imgElement.style.transform = "translateX(100%)";
        imgElement.style.opacity = 0;
        setTimeout(() => {
            imgElement.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
            imgElement.style.opacity = 1;
            imgElement.style.transform = "translateX(0%)";
        }, 50);
    }, 500);
  } 
}

// function
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage("next");
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage("prev");
}

// cards2
const images1 = [
  "assets/img/product/logo-design/card1.jpg",
  "assets/img/product/logo-design/card2.jpg",
  "assets/img/product/logo-design/card3.jpg",
  "assets/img/product/logo-design/card4.jpg",
  "assets/img/product/logo-design/card5.jpg",
  "assets/img/product/logo-design/card6.jpg",
  "assets/img/product/logo-design/card7.jpg",
  "assets/img/product/logo-design/card8.jpg"
];

let currentIndex1 = 0;

function updateImage1(direction) {
  const imgElement1 = document.getElementById("cardImage1");
  imgElement1.style.opacity = 0;

  if (direction === "next1") {
      imgElement1.style.transform = "translateX(100%)";
      setTimeout(() => {
        imgElement1.style.transition = "none";
        imgElement1.src = images1[currentIndex1];
        imgElement1.style.transform = "translateX(-100%)";
        imgElement1.style.opacity = 0;
        setTimeout(() => {
            imgElement1.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
            imgElement1.style.opacity = 1;
            imgElement1.style.transform = "translateX(0%)";
        }, 50);
    }, 500);
  } else {
      imgElement1.style.transform = "translateX(-100%)";
      setTimeout(() => {
        imgElement1.style.transition = "none";
        imgElement1.src = images1[currentIndex1];
        imgElement1.style.transform = "translateX(100%)";
        imgElement1.style.opacity = 0;
        setTimeout(() => {
            imgElement1.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
            imgElement1.style.opacity = 1;
            imgElement1.style.transform = "translateX(0%)";
        }, 50);
    }, 500);
  } 
}

// function
function nextImage1() {
  currentIndex1 = (currentIndex1 + 1) % images1.length;
  updateImage1("next1");
}

function prevImage1() {
  currentIndex1 = (currentIndex1 - 1 + images1.length) % images1.length;
  updateImage1("prev1");
}

// cards3
const images2 = [
  "assets/img/product/editing-video/card1.jpg",
  "assets/img/product/editing-video/card2.jpg",
  "assets/img/product/editing-video/card3.jpg",
  "assets/img/product/editing-video/card4.jpg",
  "assets/img/product/editing-video/card5.jpg",
  "assets/img/product/editing-video/card6.jpg",
  "assets/img/product/editing-video/card7.jpg",
  "assets/img/product/editing-video/card8.jpg",
  "assets/img/product/editing-video/card9.jpg",
  "assets/img/product/editing-video/card10.jpg",
];

let currentIndex2 = 0;

function updateImage2(direction) {
  const imgElement2 = document.getElementById("cardImage2");
  imgElement2.style.opacity = 0;

  if (direction === "next2") {
      imgElement2.style.transform = "translateX(100%)";
      setTimeout(() => {
        imgElement2.style.transition = "none";
        imgElement2.src = images2[currentIndex2];
        imgElement2.style.transform = "translateX(-100%)";
        imgElement2.style.opacity = 0;
        setTimeout(() => {
            imgElement2.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
            imgElement2.style.opacity = 1;
            imgElement2.style.transform = "translateX(0%)";
        }, 50);
    }, 500);
  } else {
      imgElement2.style.transform = "translateX(-100%)";
      setTimeout(() => {
        imgElement2.style.transition = "none";
        imgElement2.src = images2[currentIndex2];
        imgElement2.style.transform = "translateX(100%)";
        imgElement2.style.opacity = 0;
        setTimeout(() => {
            imgElement2.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
            imgElement2.style.opacity = 1;
            imgElement2.style.transform = "translateX(0%)";
        }, 50);
    }, 500);
  } 
}

// function
function nextImage2() {
  currentIndex2 = (currentIndex2 + 1) % images2.length;
  updateImage2("next2");
}

function prevImage2() {
  currentIndex2 = (currentIndex2 - 1 + images2.length) % images2.length;
  updateImage2("prev2");
}

// cards4
const images3 = [
  "assets/img/product/3d-arsitekture/card1.jpg",
  "assets/img/product/3d-arsitekture/card2.jpg",
  "assets/img/product/3d-arsitekture/card3.jpg",
  "assets/img/product/3d-arsitekture/card4.jpg",
  "assets/img/product/3d-arsitekture/card5.jpg",
  "assets/img/product/3d-arsitekture/card6.jpg",
  "assets/img/product/3d-arsitekture/card7.jpg",
  "assets/img/product/3d-arsitekture/card8.jpg",
  "assets/img/product/3d-arsitekture/card9.jpg",
];

let currentIndex3 = 0;

function updateImage3(direction) {
  const imgElement3 = document.getElementById("cardImage3");
  imgElement3.style.opacity = 0;

  if (direction === "next3") {
      imgElement3.style.transform = "translateX(100%)";
      setTimeout(() => {
        imgElement3.style.transition = "none";
        imgElement3.src = images3[currentIndex3];
        imgElement3.style.transform = "translateX(-100%)";
        imgElement3.style.opacity = 0;
        setTimeout(() => {
            imgElement3.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
            imgElement3.style.opacity = 1;
            imgElement3.style.transform = "translateX(0%)";
        }, 50);
    }, 500);
  } else {
      imgElement3.style.transform = "translateX(-100%)";
      setTimeout(() => {
        imgElement3.style.transition = "none";
        imgElement3.src = images3[currentIndex3];
        imgElement3.style.transform = "translateX(100%)";
        imgElement3.style.opacity = 0;
        setTimeout(() => {
            imgElement3.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
            imgElement3.style.opacity = 1;
            imgElement3.style.transform = "translateX(0%)";
        }, 50);
    }, 500);
  } 
}

// function
function nextImage3() {
  currentIndex3 = (currentIndex3 + 1) % images3.length;
  updateImage3("next3");
}

function prevImage3() {
  currentIndex3 = (currentIndex3 - 1 + images3.length) % images3.length;
  updateImage3("prev3");
}

// cards5
const images4 = [
  "assets/img/product/editing-photo/card1.png",
  "assets/img/product/editing-photo/card2.jpg",
  "assets/img/product/editing-photo/card3.jpg",
  "assets/img/product/editing-photo/card4.jpg",
  "assets/img/product/editing-photo/card5.jpg",
  "assets/img/product/editing-photo/card6.jpg",
  "assets/img/product/editing-photo/card7.jpg",
  "assets/img/product/editing-photo/card8.jpg",
  "assets/img/product/editing-photo/card9.jpg",
  "assets/img/product/editing-photo/card10.jpg",
];

let currentIndex4 = 0;

function updateImage4(direction) {
  const imgElement4 = document.getElementById("cardImage4");
  imgElement4.style.opacity = 0;

  if (direction === "next4") {
      imgElement4.style.transform = "translateX(100%)";
      setTimeout(() => {
        imgElement4.style.transition = "none";
        imgElement4.src = images4[currentIndex4];
        imgElement4.style.transform = "translateX(-100%)";
        imgElement4.style.opacity = 0;
        setTimeout(() => {
            imgElement4.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
            imgElement4.style.opacity = 1;
            imgElement4.style.transform = "translateX(0%)";
        }, 50);
    }, 500);
  } else {
      imgElement4.style.transform = "translateX(-100%)";
      setTimeout(() => {
        imgElement4.style.transition = "none";
        imgElement4.src = images4[currentIndex4];
        imgElement4.style.transform = "translateX(100%)";
        imgElement4.style.opacity = 0;
        setTimeout(() => {
            imgElement4.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
            imgElement4.style.opacity = 1;
            imgElement4.style.transform = "translateX(0%)";
        }, 50);
    }, 500);
  } 
}

// function
function nextImage4() {
  currentIndex4 = (currentIndex4 + 1) % images4.length;
  updateImage4("next4");
}

function prevImage4() {
  currentIndex4 = (currentIndex4 - 1 + images4.length) % images4.length;
  updateImage4("prev4");
}