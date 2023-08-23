import fs from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        const students = {};

        for (const line of lines) {
          const [firstname, field] = line.split(',');

          if (!students[field]) {
            students[field] = [];
          }

          if (firstname) {
            students[field].push(firstname);
          }
        }

        resolve(students);
      }
    });
  });
}
