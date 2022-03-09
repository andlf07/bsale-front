class RenderCategory {
  createCategoryList(data, id) {
    const container = document.getElementById(id);
    const category = document.createElement("div");
    category.className = "category";
    //   category.setAttribute("id", `${data.id}`);
    let htmlTemplate = `
            <a href="#" class="category-name" id="${data.id}">${data.name}</a>
    `;
    container.appendChild(category).innerHTML = htmlTemplate;
  }
}

export const renderCategory = new RenderCategory();
