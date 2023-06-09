const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const headers = lines[0].split(',');

    const fieldIndex = headers.indexOf('field');
    const firstNameIndex = headers.indexOf('firstname');

    const students = {};
    for (let i = 1; i < lines.length; i += 1) {
      const fields = lines[i].split(',');
      const field = fields[fieldIndex].trim();
      const firstName = fields[firstNameIndex].trim();

      if (students[field] === undefined) {
        students[field] = [];
      }
      students[field].push(firstName);
    }

    console.log(`Number of students: ${lines.length - 1}`);
    Object.entries(students).forEach(([field, names]) => {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
