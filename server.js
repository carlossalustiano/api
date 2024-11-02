import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());

/* Rotas */

app.listen(3000, () => console.log('Server is running  in http://localhost:3000'));