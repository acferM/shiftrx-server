import type { ShiftsRepository } from "../repositories/shifts-repository.js"

type GetShiftServiceParams = {
  data: {
    shiftId: string
  }
  deps: {
    shiftsRepository: ShiftsRepository
  }
}

export async function getShiftService({ data, deps }: GetShiftServiceParams) {
  const { shiftsRepository } = deps

  const shift = await shiftsRepository.findById(data.shiftId)

  if (!shiftsRepository) {
    throw new Error('Shift not found')
  }

  return shift
}
