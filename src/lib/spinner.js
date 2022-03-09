//spinner when is loading data
export const spinner = (display) => {
  const spinnerContainer = document.querySelector(".spinner-container");
  if (spinnerContainer.style.display == "flex") {
    spinnerContainer.style.display = display;
  } else {
    spinnerContainer.style.display = display;
    setTimeout(() => {
      spinnerContainer.style.display = "none";
    }, 4000);
  }
};
