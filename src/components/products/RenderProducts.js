const URL_IMAGE_NOTFOUND =
  "https://programacion.net/files/article/20161110041116_image-not-found.png";

class RenderProducts {
  createProduct(data) {
    const container = document.getElementById("products-container");
    const product = document.createElement("div");
    product.className = "product-container";
    product.setAttribute("id", `${data.id}`);
    let htmlTemplate = `
            <div class="product-img">
               <img src="${
                 data.url_image === null ? URL_IMAGE_NOTFOUND : data.url_image
               }" alt="Imagen del Producto">
            </div>
            <span class="product-title">${data.name}</span>
            <div class="product-price-container">
               <span class="product-price">$${data.price}</span>
               <span class="${
                 data.discount === 0 ? "discount-container" : "discount"
               }" id="discount"> -${data.discount} %</span>
               <span class="product-cart gg-shopping-cart"></span>
            </div>
      `;

    container.appendChild(product).innerHTML = htmlTemplate;
  }
}

export const renderProducts = new RenderProducts();
