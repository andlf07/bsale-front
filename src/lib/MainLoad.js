import { config } from "../../config.js";
import { renderCategory } from "../components/category/RenderCategories.js";
import { renderProducts } from "../components/products/RenderProducts.js";
import { getData } from "../getData.js";
import { spinner } from "./spinner.js";

const { URL, URL_CATEGORY, URL_PRODUCTS } = config;
//When the dom is loaded we get products and a list of category
class MainLoad {
  async domLoaded() {
    const getProductsData = await getData.dataAPI(`${URL + URL_PRODUCTS}`);
    const getCategoryData = await getData.dataAPI(`${URL + URL_CATEGORY}`);
    const { category } = getCategoryData;
    const { products } = getProductsData;
    //if one of the API return a error 400 we handle with an alert
    if (getCategoryData.code === 400 || getProductsData === 400) {
      alert("Hubo un error, intente mas tarde ");
    }
    //Iterate the array of products and create at the products container
    products.forEach((product) => {
      renderProducts.createProduct(product);
    });
    //Iterate the array of category and create elements to the category container and category menu
    category.forEach((category) => {
      renderCategory.createCategoryList(category, "category-container");
      renderCategory.createCategoryList(category, "category-container-menu");
    });

    spinner("none");
  }
}

export const mainLoad = new MainLoad();
