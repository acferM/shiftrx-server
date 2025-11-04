import { prisma } from "@/singletons/prisma.js";
import type { FindAllShiftsParams, HireParams, HireReturn, ShiftsRepository } from "../../repositories/shifts-repository.js";

export class PrismaShiftsRepository implements ShiftsRepository {
  async findById(id: string) {
    const shift = await prisma.shift.findUnique({
      where: {
        id
      }
    })

    return shift
  }

  async findAll({ relations }: FindAllShiftsParams) {
    const shifts = await prisma.shift.findMany({
      include: relations
    })

    return shifts
  }

  async hire({ applicationId, shiftId, userId }: HireParams): Promise<HireReturn> {
    const [updatedShift, updatedApplication] = await prisma.$transaction([
      prisma.shift.update({
        where: { id: shiftId },
        data: {
          hiredProviderId: userId,
          status: 'HIRED'
        }
      }),
      prisma.application.update({
        where: { id: applicationId },
        data: {
          status: 'HIRED'
        }
      })
    ])

    return {
      shift: updatedShift,
      application: updatedApplication
    }
  }
}
