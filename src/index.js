import path from 'path';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { isAuth } from './app/restful/middlewares/auth';
import routes from './app/restful/routes';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(isAuth);
app.use(routes);

app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, 'assets/index.html'));
});

app.listen({ port: PORT }, () =>
  process.stdout.write(`http://localhost:${PORT}`),
);
