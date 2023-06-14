import { readDatabase } from '../utils.js';

export class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase(req.database);
      let response = 'This is the list of our students\n';

      Object.keys(students).sort((a, b) => a.localeCompare(b)).forEach((field) => {
        const count = students[field].length;
        const list = students[field].join(', ');
        response += `Number of students in ${field}: ${count}. List: ${list}\n`;
      });

      res.status(200).send(response);
    } catch (error) {
      res.status(500).send(`Cannot load the database: ${error.message}`);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    try {
      const students = await readDatabase(req.database);
      const major = req.params.major.toUpperCase();

      if (major !== 'CS' && major !== 'SWE') {
        res.status(500).send('Major parameter must be CS or SWE');
        return;
      }

      const list = students[major] ? students[major].join(', ') : '';

      res.status(200).send(`List: ${list}`);
    } catch (error) {
      res.status(500).send(`Cannot load the database: ${error.message}`);
    }
  }
}
