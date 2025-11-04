import { type FastifyPluginAsync } from "fastify";
import { UsersController } from "./controllers/users-controller.js";

const usersController = new UsersController()

export const usersRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.get('/', usersController.index)
}

