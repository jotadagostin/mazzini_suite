// close the menu when checked:

document.querySelectorAll("#menu a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector("#menuCheckbox").checked = false;
  });
});

// to fix the scrow-x problem(translate problem):

document.documentElement.style.overflowX = "hidden";
document.body.style.overflowX = "hidden";

//smooth:

// document.addEventListener("DOMContentLoaded", () => {
//   const headerHeight = 160;

//   // Função para animar o scroll
//   function smoothScrollTo(endY, duration) {
//     const startY = window.scrollY || window.pageYOffset;
//     const distanceY = endY - startY;
//     const startTime = performance.now();

//     function step(currentTime) {
//       const time = Math.min(1, (currentTime - startTime) / duration);
//       const easedTime = easeInOutCubic(time);
//       window.scrollTo(0, startY + distanceY * easedTime);
//       if (time < 1) requestAnimationFrame(step);
//     }

//     function easeInOutCubic(t) {
//       return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
//     }

//     requestAnimationFrame(step);
//   }

//   // Escuta todos os cliques em links internos
//   document.querySelectorAll('a[href^="#"]').forEach((link) => {
//     link.addEventListener("click", (e) => {
//       const targetId = link.getAttribute("href");
//       const target = document.querySelector(targetId);

//       if (target) {
//         e.preventDefault();
//         const offsetTop = target.offsetTop - headerHeight;
//         smoothScrollTo(offsetTop, 600); // 600ms de duração
//       }
//     });
//   });
// });

// document.querySelectorAll("button[data-target]").forEach((btn) => {
//   btn.addEventListener("click", () => {
//     const targetId = btn.getAttribute("data-target");
//     const target = document.querySelector(targetId);

//     if (target) {
//       const offsetTop = target.offsetTop - headerHeight;
//       smoothScrollTo(offsetTop, 600);
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const headerHeight = 160;

  // Função para animar o scroll
  function smoothScrollTo(endY, duration) {
    const startY = window.scrollY || window.pageYOffset;
    const distanceY = endY - startY;
    const startTime = performance.now();

    function step(currentTime) {
      const time = Math.min(1, (currentTime - startTime) / duration);
      const easedTime = easeInOutCubic(time);
      window.scrollTo(0, startY + distanceY * easedTime);
      if (time < 1) requestAnimationFrame(step);
    }

    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    requestAnimationFrame(step);
  }

  // 🔹 Captura todos os links internos
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        e.preventDefault();
        const offsetTop = target.offsetTop - headerHeight;
        smoothScrollTo(offsetTop, 600); // 600ms de duração
      }
    });
  });

  // 🔹 Captura todos os botões com data-target
  document.querySelectorAll("button[data-target]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      const target = document.querySelector(targetId);

      if (target) {
        const offsetTop = target.offsetTop - headerHeight;
        smoothScrollTo(offsetTop, 600);
      }
    });
  });
});
