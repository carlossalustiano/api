import { PrismaClient } from '@prisma/client';
import express, { request, response } from 'express';

const router = express.Router();
const prisma = new PrismaClient();

// Retornando profissionais.

router.get('/listar-profissionais', async (request, response) => {
    try {
        let profissionais = [];

        if (request.query) { // Se houver alguma filtragem (Vai retornar apenas os profissionais que atenderem a filtragem do aluno.)
            profissionais = await prisma.profissional.findMany({
                where: {
                    especialidade: request.query.especialidade
                }
            })
        } else { // Vai retornar todos os profissionais do Banco de dados.
            profissionais = await prisma.profissional.findMany(); 
        }

        response.status(200).json(profissionais);
    } catch (error) {
        response.status(500).json({ message: 'Falha no servidor.' })
        console.log(error)
    }
  });

  export default router