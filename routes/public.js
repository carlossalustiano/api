import { PrismaClient } from '@prisma/client';
import express, { request, response } from 'express';
import bcrypt from "bcrypt";

const router = express.Router();
const prisma = new PrismaClient();

// Cadastrar aluno.

router.post('/cadastrar-aluno', async (request, response) => {
    try {
        const salt = await bcrypt.genSalt(10); // Nível da incriptação
        const hashPassword = await bcrypt.hash(request.body.senha, salt); // Criando a senha criptografada.

        await prisma.aluno.create({ // Criando aluno no Banco de dados.
            data: {
                nome: request.body.nome,
                idade: request.body.idade,
                email: request.body.email,
                senha: hashPassword,
                faculdade: request.body.faculdade,
                sintoma: request.body.sintoma
            }
        })
        response.status(201).send("Aluno cadastrado com sucesso.")
    } catch (error) {
        response.status(500).json({ message: "Error no Servidor, tente novamente." });
    }
})

// Cadastrar profissional.

router.post('/cadastrar-profissional', async (request, response) => { // Criando profissional no Banco de dados.
    try {
        await prisma.profissional.create({ 
            data: {
                nome: request.body.nome,
                email: request.body.email,
                numero: request.body.numero,
                especialidade: request.body.especialidade
            }
        })
        response.status(201).send("Profissional cadastrado com sucesso.")
    } catch (error) {
        response.status(500).json({ message: "Error no Servidor, tente novamente." });
    }
})

export default router