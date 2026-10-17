import { students } from "./../students.mjs";

const app = document.querySelector("#app");

// Template de l'en-tête du tableau
function generateTableHeader() {
  return `
    <thead>
      <tr>
        <th>Nom</th>
        <th>Groupe</th>
      </tr>
    </thead>
  `;
}

// Template d'une ligne du tableau
function generateTableRow(student) {
  return `
    <tr>
      <td>${student.name}</td>
      <td>${student.group}</td>
    </tr>
  `;
}

// Template du corps du tableau
function generateTableBody(students) {
  const rows = students.map(generateTableRow).join("");

  return `
    <tbody>
      ${rows}
    </tbody>
  `;
}

// Template du tableau complet
function generateTable(students) {
  return `
    <table>
      ${generateTableHeader()}
      ${generateTableBody(students)}
    </table>
  `;
}

// Générer et afficher le tableau
app.innerHTML = generateTable(students);
