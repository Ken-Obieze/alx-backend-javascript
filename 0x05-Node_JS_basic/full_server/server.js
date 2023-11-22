import express from 'express';
import path from 'path';
import router from './routes';

const app = express();
const port = 1245;

app.use(express.json());

const databaseFileName = process.argv[2];

app.use((req, res, next) => {
  req.databaseFileName = databaseFileName;
  next();
});

app.use('/', router);

app.listen(port, () => {
  console.log(`Express server is listening on port ${port}`);
});

export default app;
