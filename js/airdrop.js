//CIRCLE
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

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const nombre = document.getElementById("nombre").value;
    const id = document.getElementById("id").value;
    const wallet = document.getElementById("wallet").value;
  
    const datos = {
      nombre: nombre,
      id: id,
      wallet: wallet,
    };
  
    fetch("http://localhost:3000/api/guardarDatos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    })
      .then((response) => {
        if (response.ok) {
          document.getElementById("mensaje").style.display = "block";
        }
      })
      .catch((error) => {
        console.error("Error al guardar los datos:", error);
      });
  });