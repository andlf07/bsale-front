import { getData } from "./src/getData.js";
import { render } from "./src/renderProducts.js";

const URL_PRODUCTS = "https://bsale-backendapp.herokuapp.com/api/products";

document.addEventListener("DOMContentLoaded", async () => {
  const data = await getData.dataAPI(URL_PRODUCTS);
  const { products } = data;
  products.forEach((element) => {
    render.createProduct(element);
  });
});
