import { students } from "./../students.mjs";

const app = document.querySelector("#app");


// 🚀Template de l'en-tête du tableau
function generateTableHeader() {
  const headers = Object.keys(students[0])
    .map(key => `<th>${key}</th>`)
    .join("");

  return `
    <thead>
      <tr>
        ${headers}
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
