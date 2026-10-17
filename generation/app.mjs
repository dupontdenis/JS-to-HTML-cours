import { students } from "./../students.mjs";

const app = document.querySelector("#app");

// Générer le HTML d'une carte
function generateCard(student) {
  return `
    <div class="card">
      <div class="card-body">
        <h2>${student.name}</h2>
      </div>
    </div>
  `;
}

// Générer toutes les cartes
const html = students.map(generateCard).join("");

// Injecter le HTML
app.innerHTML = html;
