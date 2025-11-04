import type { FastifyPluginAsync } from "fastify";
import { applicationsRoutes } from "@/modules/applications/http/applications-routes.js";
import { shiftsRoutes } from "@/modules/shifts/http/shifts-routes.js";
import { usersRoutes } from "@/modules/users/http/users-routes.js";

export const appRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.register(usersRoutes, { prefix: '/users' });
  fastify.register(shiftsRoutes, { prefix: '/shifts' });
  fastify.register(applicationsRoutes, { prefix: '/applications' })
}
