import 'dotenv/config'
import Fastify from 'fastify'
import { appRoutes } from './http/app-routes.js'
import cors from '@fastify/cors'

const app = Fastify({
  logger: true
})

app.register(cors, {
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
})

app.register(appRoutes)

app.get('/health', async () => {
  return {
    status: 'ok'
  }
})

app.listen({
  port: 3333
})
