import type { FastifyPluginAsync } from "fastify";
import { ApplicationsController } from "./controllers/applications-controller.js";
import { UsersApplicationsController } from "./controllers/users-applications-controller.js";

const applicationsController = new ApplicationsController()
const usersApplicationsController = new UsersApplicationsController()

export const applicationsRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.get('/from-user/:userId', usersApplicationsController.index)
  fastify.patch('/hire', usersApplicationsController.Update)

  fastify.post('/', applicationsController.Create)
  fastify.delete('/:id', applicationsController.Delete)
}
