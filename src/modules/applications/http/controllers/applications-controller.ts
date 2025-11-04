import type { FastifyRequest } from "fastify";
import { PrismaApplicationsRepository } from "../../repositories/implementations/prisma-applications-repository.js";
import { createApplicationService } from "../../services/create-application-service.js";
import { withdrawApplicationService } from "../../services/withdraw-application-service.js";

type CreateBody = {
  userId: string
  shiftId: string
}

type DeleteParams = {
  id: string
}

const applicationsRepository = new PrismaApplicationsRepository()

export class ApplicationsController {
  async Create(request: FastifyRequest<{ Body: CreateBody }>) {
    const { shiftId, userId } = request.body

    const applications = await createApplicationService({
      data: {
        shiftId,
        userId
      },
      deps: {
        applicationsRepository
      }
    })

    return applications
  }

  async Delete(request: FastifyRequest<{ Params: DeleteParams }>) {
    const { id } = request.params
    console.log('entrou', { id })

    const application = await withdrawApplicationService({
      data: {
        applicationId: id
      },
      deps: {
        applicationsRepository
      }
    })

    return application
  }
}
