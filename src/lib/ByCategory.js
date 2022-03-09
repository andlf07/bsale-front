import { config } from "../../config.js";
import { cleanSection } from "../CleanProductsList.js";
import { renderProducts } from "../components/products/RenderProducts.js";
import { getData } from "../getData.js";
import { spinner } from "./spinner.js";

const { URL, URL_PRODUCTS } = config;

//search by category as the searchbyattributes we have to clean the procuts container to add the news products
class ByCategory {
  async productByCategory(e) {
    e.preventDefault();
    if (e.target.className === "category-name") {
      cleanSection.clean();
      spinner("flex");
      const getProductsByCategory = await getData.dataAPI(
        `${URL + URL_PRODUCTS}/${e.target.innerText}`
      );
      const { products } = getProductsByCategory;
      products.forEach((product) => {
        renderProducts.createProduct(product);
      });
    }
  }
}

export const byCategory = new ByCategory();
