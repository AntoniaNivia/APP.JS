import cors from 'cors';
import Express from 'express';
import logger from './middlewares/logger.js';
import userRouter from './router/users.js';

const cors= require('cors')
const app = Express()
app.use(Express.json())

app.use(cors({
  origin: 'https://ifpi-picos.github.io',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}))
app.get('/', (req, res) => {
  res.send("App online!")
})

app.use(logger)
app.use(userRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`app online na porta ${PORT}`)
});