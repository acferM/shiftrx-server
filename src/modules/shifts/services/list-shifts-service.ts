import type { ShiftsRepository } from "../repositories/shifts-repository.js"

type ListShiftsService = {
  deps: {
    shiftsRepository: ShiftsRepository
  }
}

export async function listShiftsService({ deps }: ListShiftsService) {
  const { shiftsRepository } = deps

  const shifts = await shiftsRepository.findAll({
    relations: {
      applications: {
        select: {
          userId: true
        }
      }
    }
  })

  return shifts
}
