"use strict";

const main = document.querySelector("main");
const arrow = document.querySelector(".arrow");
const navlink = document.querySelector(".navlink");
const burgerMenu = document.querySelector(".burgerMenu");
const body = document.querySelector("header");

const headerImage = document.querySelector("#header-image");
const transformImage = document.querySelector("#transform");
const standImage = document.querySelector("#stand");
const graphicImage = document.querySelector("#graphic");
const photographyImage = document.querySelector("#photography");
const milkImage = document.querySelector("#milk");
const orangeImage = document.querySelector("#orange");
const coneImage = document.querySelector("#cone");
const sugarImage = document.querySelector("#sugar");

arrow.addEventListener("click", () => {
  main.scrollIntoView({ behavior: "smooth" });
});
burgerMenu.addEventListener("click", () => {
  navlink.classList.toggle("hidden");
  navlink.classList.toggle("flex");
});
body.addEventListener("click", () => {
  navlink.classList.add("hidden");
  navlink.classList.remove("flex");
});

const imageSrc = function () {
  if (window.innerWidth >= 640) {
    headerImage.src = "./images/desktop/image-header.jpg";
    transformImage.src = "./images/desktop/image-transform.jpg";
    standImage.src = "./images/desktop/image-stand-out.jpg";
    graphicImage.src = "./images/desktop/image-graphic-design.jpg";
    photographyImage.src = "./images/desktop/image-photography.jpg";
    milkImage.src = "./images/desktop/image-gallery-milkbottles.jpg";
    orangeImage.src = "./images/desktop/image-gallery-orange.jpg";
    coneImage.src = "./images/desktop/image-gallery-cone.jpg";
    sugarImage.src = "./images/desktop/image-gallery-sugarcubes.jpg";
  } else {
    headerImage.src = "./images/mobile/image-header.jpg";
    transformImage.src = "./images/mobile/image-transform.jpg";
    standImage.src = "./images/mobile/image-stand-out.jpg";
    graphicImage.src = "./images/mobile/image-graphic-design.jpg";
    photographyImage.src = "./images/mobile/image-photography.jpg";
    milkImage.src = "./images/mobile/image-gallery-milkbottles.jpg";
    orangeImage.src = "./images/mobile/image-gallery-orange.jpg";
    coneImage.src = "./images/mobile/image-gallery-cone.jpg";
    sugarImage.src = "./images/mobile/image-gallery-sugarcubes.jpg";
  }
};
imageSrc();
window.addEventListener("resize", imageSrc);
