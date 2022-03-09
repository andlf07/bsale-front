import { spinner } from "./src/lib/spinner.js";
import { attributesSearch } from "./src/lib/AttributesSearch.js";
import { mainLoad } from "./src/lib/MainLoad.js";
import { byCategory } from "./src/lib/ByCategory.js";
import { onView } from "./src/lib/Onview.js";

//When visit the website and the DOM is loaded we call the API
document.addEventListener("DOMContentLoaded", mainLoad.domLoaded);

//Onclick one category we load all the products with this category
const category = document.querySelector("#category-container");
category.addEventListener("click", byCategory.productByCategory);

const categoryMenu = document.querySelector(".category-container-list");
categoryMenu.addEventListener("click", byCategory.productByCategory);

//Search by name
const nameInput = document.querySelector(".search-by-name");
nameInput.addEventListener("keypress", async (e) => {
  //Checking when the user use Enter keyCode = 13
  if (e.keyCode === 13) {
    attributesSearch.search("name", e.target.value);
  }
});
//search by price
const priceInput = document.querySelector(".search-by-price");
priceInput.addEventListener("keypress", async (e) => {
  //Checking when the user use Enter keyCode = 13
  if (e.keyCode === 13) {
    spinner("flex");
    attributesSearch.search("price", e.target.value);
  }
});

//search by discount
const discountInput = document.querySelector(".search-by-discount");
discountInput.addEventListener("keypress", async (e) => {
  //Checking when the user use Enter keyCode = 13
  if (e.keyCode === 13) {
    spinner("flex");
    attributesSearch.search("discount", e.target.value);
  }
});

//search by price at Menu
const priceInputMenu = document.querySelector(".search-by-price-menu");
priceInputMenu.addEventListener("keypress", async (e) => {
  //Checking when the user use Enter keyCode = 13
  if (e.keyCode === 13) {
    spinner("flex");
    onView.view();
    attributesSearch.search("price", e.target.value);
  }
});

//search by discount at Menu
const discountInputMenu = document.querySelector(".search-by-discount-menu");
discountInputMenu.addEventListener("keypress", async (e) => {
  //Checking when the user use Enter keyCode = 13
  if (e.keyCode === 13) {
    spinner("flex");
    onView.view();
    attributesSearch.search("discount", e.target.value);
  }
});

//Burger menu open
const burgerMenu = document.querySelector(".gg-menu");
burgerMenu.addEventListener("click", onView.view);

//close menu
const closeMenu = document.querySelector(".gg-close-o");
closeMenu.addEventListener("click", onView.view);
