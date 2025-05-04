// close the menu when checked:

document.querySelectorAll("#menu a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector("#menuCheckbox").checked = false;
  });
});

// to fix the scrow-x problem(translate problem):

document.documentElement.style.overflowX = "hidden";
document.body.style.overflowX = "hidden";
