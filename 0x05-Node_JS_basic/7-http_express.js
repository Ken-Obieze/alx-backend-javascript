const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const database = req.query.database || 'no_database.csv';
    const students = await countStudents(database);
    res.send(`This is the list of our students\n${students}`);
  } catch (error) {
    res.send(`Error: ${error.message}`);
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
