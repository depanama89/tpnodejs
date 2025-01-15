const students = [
  {
    name: "John",
    notes: [1, 20, 18, 19, 12],
  },
  {
    name: "Jane",
    notes: [17, 18, 20, 13, 15],
  },
  {
    name: "Sophie",
    notes: [17, 12, 14, 15, 13],
  },
  {
    name: "Marc",
    notes: [2, 3, 5, 8, 9],
  },
];

const moyenne = (notes) => {
  let sum = 0;
  for (let note of notes) {
    sum = sum + note;
  }
  return sum / notes.length;
};
const compareStudent = (a, b) => {
  //si a est superieur on renvoie 1 sinon -1
  return b.moyenne - a.moyenne;
};

for (let student of students) {
  student.moyenne = moyenne(student.notes);
  student.worst = Math.min(...student.notes);
  student.best = Math.max(...student.notes);
}
students.sort(compareStudent);

const formatStudent = (student) => {
  return `${student.name} avec une moyenne de ${student.moyenne}`;
};
console.log(` Top 3 étudiant 
    1: ${formatStudent(students[0])}
    2: ${formatStudent(students[1])}
    3: ${formatStudent(students[2])}
    `);
