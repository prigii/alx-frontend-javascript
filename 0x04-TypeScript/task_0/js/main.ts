interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: John;
  lastName: Kamau;
  age: 20;
  location: Murang'a;
}

const student2: Student = {
  firstName: Terry;
  lastName: Wambui;
  age: 22;
  location: Naivasha;
}

const studentsList: Student[] = [student1, student2];

// Render the table using Vanilla JS
const table = document.createElement("table");

studentsList.forEach((student)) => {
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);

  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});

document.body.appendChild(table);

