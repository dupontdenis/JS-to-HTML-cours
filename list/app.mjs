import { students } from "./../students.mjs";

const app = document.querySelector("#app");

// Générer le HTML d'un étudiant
function generateStudent(student) {
  return `
    <li>
      ${student.name} - Groupe ${student.group}
    </li>
  `;
}

// Générer tous les éléments de la liste
const listeItems = students.map(generateStudent).join("");

// Injecter le HTML dans une liste ol
const listeOl = `
  <ol>
    ${listeItems}
  </ol>
`;

app.innerHTML = listeOl;
