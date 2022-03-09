class CleanSection {
  clean() {
    const container = document.querySelectorAll(".product-container");
    container.forEach((element) => {
      element.remove();
    });
  }
}

export const cleanSection = new CleanSection();
