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

const createNewsBtn = document.getElementById("create-news-btn");
const formContainer = document.getElementById("form-container-news");
const closeBtn = document.getElementById("close-btn");
const newsForm = document.getElementById("news-form");
const charLimitMsg = document.getElementById("char-limit-msg");
const successMsg = document.getElementById("success-msg");

createNewsBtn.addEventListener("click", () => {
  formContainer.style.display = "block";
  successMsg.style.display = "none"; // Agrega esta línea
  createNewsBtn.textContent = "Create your news";
});
closeBtn.addEventListener("click", () => {
  formContainer.style.display = "none";
  resetForm();
});
function validateDiscordUser() {
  const discordUserInput = document.getElementById("discord-user");
  const discordUserValue = discordUserInput.value;
  const regex = /#[0-9]{4}$/; // Expresión regular que busca un '#' seguido de 4 dígitos al final del texto

  if (discordUserValue.match(regex)) {
    discordUserInput.setCustomValidity("");
  } else {
    discordUserInput.setCustomValidity(
      "El usuario de Discord debe contener un carácter # seguido de 4 dígitos numéricos."
    );
  }
}

document
  .getElementById("discord-user")
  .addEventListener("input", validateDiscordUser);

newsForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = {
    discordUser: document.getElementById("discord-user").value,
    title: document.getElementById("title").value,
    subtitle: document.getElementById("subtitle").value,
    news: document.getElementById("news").value,
    topic: document.getElementById("topic").value,
  };

  try {
    const response = await fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      successMsg.style.display = "block";
      formContainer.style.display = "none";
      createNewsBtn.textContent = "Vuelve al formulario";
      resetForm();
    } else {
      throw new Error("Error al enviar el correo electrónico");
    }
  } catch (error) {
    console.error(error);
    alert("Error al enviar el correo electrónico");
  }
});

newsForm.addEventListener("input", (e) => {
  const target = e.target;
  const maxLength = target.maxLength;

  if (maxLength > 0 && target.value.length >= maxLength) {
    charLimitMsg.style.display = "block";
  } else {
    charLimitMsg.style.display = "none";
  }
});

function resetForm() {
  newsForm.reset();
  charLimitMsg.style.display = "none";
}

// ROAD BOXS

window.addEventListener("DOMContentLoaded", function () {
  const containers = document.querySelectorAll(".timeline-news");
  const speed = [0.2, 0.2, 0.2];

  containers.forEach((container, containerIndex) => {
    const boxes = container.querySelectorAll(".timeline-box-news");

    boxes.forEach((box, index) => {
      box.style.left = `${
        index * (box.clientWidth + 60) +
        window.innerWidth / 2 -
        box.clientWidth / 2
      }px`;
    });

    function moveBoxes() {
      boxes.forEach((box, index) => {
        const newPos = parseFloat(box.style.left) - speed[containerIndex];
        box.style.left = `${newPos}px`;

        if (newPos + box.clientWidth < 0) {
          box.style.left = `${
            window.innerWidth - (box.clientWidth - Math.abs(newPos))
          }px`;
        }
      });

      requestAnimationFrame(moveBoxes);
    }

    moveBoxes();
  });
});
