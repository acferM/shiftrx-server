import { prisma } from "@/singletons/prisma.js";
import type { ApplicationsRepository, CreateApplicationParams, FindAllByUserIdParams, FindByShiftAndUserParams } from "../applications-repository.js";
import type { ApplicationModel } from "@generated/prisma/models.js";

export class PrismaApplicationsRepository implements ApplicationsRepository {
  async findById(id: string) {
    const application = await prisma.application.findUnique({
      where: {
        id
      }
    })

    return application
  }

  async findByShiftAndUser({ userId, shiftId }: FindByShiftAndUserParams) {
    const application = await prisma.application.findFirst({
      where: {
        shiftId,
        userId,
      }
    })

    return application
  }

  async findAllByUserId({ userId, relations }: FindAllByUserIdParams) {
    const applications = await prisma.application.findMany({
      where: {
        user: {
          id: userId
        }
      },
      include: relations
    })


    return applications
  }

  async create({ shiftId, userId }: CreateApplicationParams) {
    const application = await prisma.application.create({
      data: {
        shift: {
          connect: {
            id: shiftId
          }
        },
        user: {
          connect: {
            id: userId
          }
        }
      }
    })

    return application
  }

  async withdraw(applicationId: string) {
    const application = await prisma.application.update({
      where: {
        id: applicationId
      },
      data: {
        status: 'WITHDRAWN'
      }
    })

    return application
  }

  async reApply(applicationId: string) {
    const application = await prisma.application.update({
      where: {
        id: applicationId
      },
      data: {
        status: 'APPLIED'
      }
    })

    return application
  }
}
