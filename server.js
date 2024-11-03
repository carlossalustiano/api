import express from 'express';
import cors from 'cors';
import publicRoutes from './routes/public.js';
import privateRoutes from './routes/private.js'

const app = express(); // Inicializando o servidor.

app.use(express.json()); // Especificar ao express que vamos utilizar JSON / Converter o body para json

app.use(cors()); // Liberado para qualquer página acessar.

app.use("/", publicRoutes); // Rotas públicas (Cadastrar aluno / Cadastrar profissional)
app.use("/", privateRoutes); // Rotas privadas (Retornar profissionais)

app.listen(3000, () => console.log('Server is running  in http://localhost:3000')); // Endereço do servidor.