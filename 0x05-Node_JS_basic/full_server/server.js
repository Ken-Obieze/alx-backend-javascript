import express from 'express';
import routes from './routes/index.js';

const app = express();
const port = 1245;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.database = process.argv[2];
  next();
});

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

export default app;
