const fs = require('fs').promises;

async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.trim().split('\n');
    
    const studentsByField = {};

    lines.forEach(line => {
      const [, , , field] = line.split(',');
      if (field) {
        const fieldName = field.trim();
        if (!studentsByField[fieldName]) {
          studentsByField[fieldName] = [];
        }
        studentsByField[fieldName].push(line.split(',')[0].trim());
      }
    });

    return studentsByField;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = { readDatabase }
