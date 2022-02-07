"use strict";

const main = document.querySelector("main");
const arrow = document.querySelector(".arrow");
const navlink = document.querySelector(".navlink");
const burgerMenu = document.querySelector(".burgerMenu");
const body = document.querySelector("header");

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
