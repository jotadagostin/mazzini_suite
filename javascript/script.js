// close the menu when checked:

document.querySelectorAll("#menu a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector("#menuCheckbox").checked = false;
  });
});

// to fix the scrow-x problem(translate problem):

document.documentElement.style.overflowX = "hidden";
document.body.style.overflowX = "hidden";

// fixing a target blank problem:

window.open(
  "https://www.freetour.com/verona?utm_source=google&utm_medium=cpc&utm_campaign=Pmax_Italy_Top_AB&utm_term=&gad_source=1&gad_campaignid=17305331886&gclid=Cj0KCQjw8cHABhC-ARIsAJnY12xO464b5T-Jdn00YWNYBo3i7hRYSYxaQsdNgKieO4y0xJ3YlrqnMeAaAvs6EALw_wcB",
  "_blank"
);
