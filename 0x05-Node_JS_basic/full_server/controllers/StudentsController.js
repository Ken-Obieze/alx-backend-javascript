const { readDatabase } = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const studentsByField = await readDatabase(req.databaseFileName);

      let response = 'This is the list of our students\n';
      Object.keys(studentsByField).sort().forEach(fieldName => {
        const students = studentsByField[fieldName];
        response += `Number of students in ${fieldName}: ${students.length}. List: ${students.join(', ')}\n`;
      });

      res.status(200).send(response);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const studentsByField = await readDatabase(req.databaseFileName);
      const students = studentsByField[major] || [];

      const response = `List: ${students.join(', ')}`;
      res.status(200).send(response);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
