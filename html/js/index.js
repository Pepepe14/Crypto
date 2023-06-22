//TOP ON THE PAAGE
const menuLinks = document.querySelectorAll(".menu-link");
menuLinks.forEach(function (menuLink) {
  menuLink.addEventListener("mouseover", function() {
    menuLink.classList.add("highlight");
  });

  menuLink.addEventListener("mouseout", function() {
    menuLink.classList.remove("highlight");
  });
});

    function smoothScrollToTop(duration) {
      const startingTime = performance.now();

      function step(currentTime) {
        const elapsedTime = currentTime - startingTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const scrollY = window.scrollY;
        const targetScrollY = 0;

        window.scrollTo(0, scrollY + (targetScrollY - scrollY) * progress);

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      }

      window.requestAnimationFrame(step);
    }