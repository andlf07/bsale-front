class OnView {
  view() {
    const menuContainer = document.querySelector(".menu-container");
    if (menuContainer.classList.contains("onview")) {
      menuContainer.classList.remove("onview");
    } else {
      menuContainer.classList.add("onview");
    }
  }
}

export const onView = new OnView();
