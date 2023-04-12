// TEXT
var button = document.querySelector(".signo");
var textBox = document.querySelector(".text-box");

button.addEventListener("click", function () {
  if (textBox.style.display === "none") {
    textBox.style.display = "block";
    button.textContent = "-";
  } else {
    textBox.style.display = "none";
    button.textContent = "+";
  }
});

// CIRCLE
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = ["#FFFFFF"];

const trailLength = 5;
const trails = [];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];

  for (let i = 0; i < trailLength; i++) {
    const trail = document.createElement("div");
    trail.classList.add("trail");
    trail.style.backgroundColor = colors[index % colors.length];
    trail.x = 0;
    trail.y = 0;
    circle.appendChild(trail);
    trails.push(trail);
  }
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 110 + "px";
    circle.style.top = y - 5 + "px";

    for (let i = 0; i < trailLength; i++) {
      const trail = trails[index * trailLength + i];
      trail.style.left = x - 110 + "px";
      trail.style.top = y - 5 + "px";
      trail.style.opacity = (trailLength - i) / trailLength;
      trail.x = x;
      trail.y = y;
    }

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();


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