const pricing = document.getElementById("pricing");
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    pricing.style.paddingTop = "90px";
    pricing.style.transition = "all 0.5s ease";
  } else {
    pricing.style.paddingTop = "0px";
    pricing.style.transition = "all 0.5s ease";
  }
});

const inputs = document.querySelectorAll(".input-container input");
const labels = document.querySelectorAll(".input-container label .txt");

inputs.forEach((input, index) => {
  input.addEventListener("focus", () => {
    labels[index].classList.add("focused");
  });

  input.addEventListener("blur", () => {
    if (input.value === "") {
      labels[index].classList.remove("focused");
    }
  });
});

//Delete btn
const deleteBtn = document.querySelector(".delete-btn");

// Agregar un controlador de eventos al botón
deleteBtn.addEventListener("click", (event) => {
  event.preventDefault();
  deleteBtn.classList.toggle("active");
});

const clickOutBtn = document.addEventListener("click", (event) => {
  if (!deleteBtn.contains(event.target)) {
    // El clic ocurrió fuera del botón, quitar la clase "active"
    deleteBtn.classList.remove("active");
  }
});

//Summary btn
const summaryBtn = document.querySelector(".summary-btn");
summaryBtn.addEventListener("click", (event) => {
  event.preventDefault();
  summaryBtn.classList.add("animate");

  setTimeout(() => {
    //Quitar la clase "animate" después de 600ms
    summaryBtn.classList.remove("animate");
  }, 600);
});
