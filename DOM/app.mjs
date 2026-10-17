import { students } from "./../students.mjs";

const app = document.querySelector("#app");

students.forEach((student) => {
  // Créer la carte
  const card = document.createElement("div");
  card.className = "card";

  // Créer le corps de la carte
  const body = document.createElement("div");
  body.className = "card-body";

  // Créer le titre
  const title = document.createElement("h2");
  title.textContent = student.name;

  // Assembler les éléments
  body.appendChild(title);
  card.appendChild(body);

  // Insérer la carte dans la page
  app.appendChild(card);
});
