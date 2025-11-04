import { listShiftsService } from "@/modules/shifts/services/list-shifts-service.js";
import { PrismaShiftsRepository } from "../../repositories/implementations/prisma-shifts-repository.js";
import type { FastifyRequest } from "fastify";
import { getShiftService } from "../../services/get-shift-service.js";

type GetParams = {
  id: string
}

const shiftsRepository = new PrismaShiftsRepository()

export class ShiftsController {
  async index() {
    const shifts = await listShiftsService({
      deps: {
        shiftsRepository
      }
    })

    return shifts
  }

  async Get(request: FastifyRequest<{ Params: GetParams }>) {
    const { id } = request.params

    const shift = await getShiftService({
      data: {
        shiftId: id
      },
      deps: {
        shiftsRepository
      }
    })

    return shift
  }
}
