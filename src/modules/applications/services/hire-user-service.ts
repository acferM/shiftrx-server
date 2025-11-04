import type { ShiftsRepository } from "@/modules/shifts/repositories/shifts-repository.js"
import type { ApplicationsRepository } from "../repositories/applications-repository.js"

type HireUserServiceParams = {
  data: {
    applicationId: string
    shiftId: string
  }
  deps: {
    shiftsRepository: ShiftsRepository
    applicationsRepository: ApplicationsRepository
  }
}

export async function hireUserService({ data, deps }: HireUserServiceParams) {
  const { shiftsRepository, applicationsRepository } = deps

  const application = await applicationsRepository.findById(data.applicationId)

  if (!application) {
    throw new Error('Application not found')
  }

  const updatedData = await shiftsRepository.hire({
    applicationId: application.id,
    shiftId: data.shiftId,
    userId: application.userId,
  })

  return updatedData
}
