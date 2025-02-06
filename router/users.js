import { PrismaClient } from '@prisma/client'
import { Router } from 'express';
const saltRounds = 10;

const userRouter = Router()
const prisma = new PrismaClient()

userRouter.get('/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany({});
    res.json(users)
  } catch (err) {
    res.status(400).send('Erro ao buscar usuários')
  }
})

userRouter.put('/users/me', async () => {
  const idUser = req.userId
  await prisma.user.update()
})

export default userRouter