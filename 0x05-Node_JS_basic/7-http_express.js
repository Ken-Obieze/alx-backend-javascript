const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const databaseFileName = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!\n');
});

app.get('/students', (req, res) => {
  const filePath = path.join(__dirname, databaseFileName);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading the database file');
      return;
    }

    const lines = data.trim().split('\n');
    const students = lines.map(line => line.split(',')); // Parse CSV lines

    const csStudents = students.filter(student => student[3].trim() === 'CS');
    const sweStudents = students.filter(student => student[3].trim() === 'SWE');

    const csStudentList = csStudents.map(student => student[0]).join(', ');
    const sweStudentList = sweStudents.map(student => student[0]).join(', ');

    const response = `
      This is the list of our students
      Number of students: ${students.length}
      Number of students in CS: ${csStudents.length}. List: ${csStudentList}
      Number of students in SWE: ${sweStudents.length}. List: ${sweStudentList}
    `;

    res.send(response);
  });
});

app.listen(1245, () => {
  console.log('Express server is listening on port 1245');
});

module.exports = app;
