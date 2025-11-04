import type { ApplicationsRepository } from "../repositories/applications-repository.js"

type ListUserApplicationsServiceParams = {
  data: {
    userId: string
  }
  deps: {
    applicationsRepository: ApplicationsRepository
  }
}

export async function listUserApplicationsService({
  data,
  deps
}: ListUserApplicationsServiceParams) {
  const { applicationsRepository } = deps

  const applications = await applicationsRepository.findAllByUserId({
    userId: data.userId,
    relations: {
      shift: true
    }
  })

  return applications
}
