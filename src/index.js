import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './app/restful/routes';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(routes);

app.get('/', (_, res) => {
  res.send('welcome to pivot web service');
});

app.listen({ port: PORT }, () =>
  process.stdout.write(`http://localhost:${PORT}`),
);

export default app;
