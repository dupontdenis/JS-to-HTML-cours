import { students } from "./../students.mjs";

const app = document.querySelector("#app");
// Définir le modèle d'une carte
const template = `
  <div class="card">
    <div class="card-body">
      <h2>{{name}}</h2>
    </div>
  </div>
`;

// Générer une carte pour chaque étudiant
const html = students
  .map((student) => {
    return template.replace("{{name}}", student.name);
  })
  .join("");

// Injecter le HTML
app.innerHTML = html;
