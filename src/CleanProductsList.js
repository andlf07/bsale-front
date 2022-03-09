//Clean the products section to add news products when we search by name or attributes
class CleanSection {
  clean() {
    const container = document.querySelectorAll(".product-container");
    container.forEach((element) => {
      element.remove();
    });
  }
}

export const cleanSection = new CleanSection();
