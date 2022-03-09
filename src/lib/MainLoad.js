import { config } from "../../config.js";
import { renderCategory } from "../components/category/RenderCategories.js";
import { renderProducts } from "../components/products/RenderProducts.js";
import { getData } from "../getData.js";
import { spinner } from "./spinner.js";

const { URL, URL_CATEGORY, URL_PRODUCTS } = config;

class MainLoad {
  async domLoaded() {
    const getProductsData = await getData.dataAPI(`${URL + URL_PRODUCTS}`);
    const getCategoryData = await getData.dataAPI(`${URL + URL_CATEGORY}`);
    const { category } = getCategoryData;
    const { products } = getProductsData;
    if (getCategoryData.code === 400 || getProductsData === 400) {
      alert("Hubo un error, intente mas tarde ");
    }
    products.forEach((product) => {
      renderProducts.createProduct(product);
    });
    category.forEach((category) => {
      renderCategory.createCategoryList(category, "category-container");
      renderCategory.createCategoryList(category, "category-container-menu");
    });

    spinner("none");
  }
}

export const mainLoad = new MainLoad();
