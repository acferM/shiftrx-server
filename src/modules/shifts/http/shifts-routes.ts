import type { FastifyPluginAsync } from "fastify";
import { ShiftsController } from "./controllers/shifts-controller.js";

const shiftsController = new ShiftsController()

export const shiftsRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.get('/', shiftsController.index)
  fastify.get('/:id', shiftsController.Get)
}
