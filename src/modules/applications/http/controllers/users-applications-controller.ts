import type { FastifyRequest } from "fastify"
import { PrismaApplicationsRepository } from "../../repositories/implementations/prisma-applications-repository.js"
import { listUserApplicationsService } from "../../services/list-user-applications-service.js"
import { hireUserService } from "../../services/hire-user-service.js"
import { PrismaShiftsRepository } from "@/modules/shifts/repositories/implementations/prisma-shifts-repository.js"

type IndexParams = {
  userId: string
}

type UpdateBody = {
  shiftId: string
  applicationId: string
}

const applicationsRepository = new PrismaApplicationsRepository()
const shiftsRepository = new PrismaShiftsRepository()

export class UsersApplicationsController {
  async index(request: FastifyRequest<{ Params: IndexParams }>) {
    const { userId } = request.params

    request.log.info(`Entrou aqui com: ${userId}`)

    const applications = await listUserApplicationsService({
      data: {
        userId
      },
      deps: {
        applicationsRepository
      }
    })

    return applications
  }

  async Update(request: FastifyRequest<{ Body: UpdateBody }>) {
    const { applicationId, shiftId } = request.body

    const application = await hireUserService({
      data: {
        applicationId,
        shiftId
      },
      deps: {
        applicationsRepository,
        shiftsRepository
      }
    })

    return application
  }
}
