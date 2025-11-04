import type { ApplicationsRepository } from "../repositories/applications-repository.js";

type CreateApplicationServiceParams = {
  data: {
    shiftId: string;
    userId: string;
  }
  deps: {
    applicationsRepository: ApplicationsRepository
  }
}

export async function createApplicationService({
  data,
  deps
}: CreateApplicationServiceParams) {
  const { applicationsRepository } = deps;

  const applicationExists = await applicationsRepository.findByShiftAndUser({
    userId: data.userId,
    shiftId: data.shiftId,
  })

  if (applicationExists) {
    if (applicationExists.status === 'WITHDRAWN') {
      const application = await applicationsRepository.reApply(applicationExists.id)

      return application
    }

    throw new Error('User has already applied to this shift.')
  }

  const application = await applicationsRepository.create({
    userId: data.userId,
    shiftId: data.shiftId
  });

  return application;
}
