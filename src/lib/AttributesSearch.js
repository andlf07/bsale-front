import { config } from "../../config.js";
import { cleanSection } from "../CleanProductsList.js";
import { renderProducts } from "../components/products/RenderProducts.js";
import { getData } from "../getData.js";
import { spinner } from "./spinner.js";

const { URL, URL_ATTRIBUTES, URL_PRODUCTS } = config;

class AttributesSearch {
  async search(attribute, value) {
    const getProducts = await getData.dataAPI(
      `${URL + URL_PRODUCTS + URL_ATTRIBUTES}?${attribute}=${value}`
    );
    const { products } = getProducts;
    if (products.length === 0 || getProducts.code === 400) {
      return alert("Por favor ingresar un dato valido/algo ocurrio mal!");
    }
    cleanSection.clean();
    spinner("flex");
    products.forEach((product) => {
      renderProducts.createProduct(product);
    });
  }
}

export const attributesSearch = new AttributesSearch();
