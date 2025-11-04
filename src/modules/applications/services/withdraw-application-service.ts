import type { ApplicationsRepository } from "../repositories/applications-repository.js"

type WithdrawApplicationServiceParams = {
  data: {
    applicationId: string
  }
  deps: {
    applicationsRepository: ApplicationsRepository
  }
}

export async function withdrawApplicationService({ data, deps }: WithdrawApplicationServiceParams) {
  const { applicationsRepository } = deps

  const application = await applicationsRepository.findById(data.applicationId)

  if (!application) {
    throw new Error('Application not found')
  }

  if (application.status !== 'APPLIED') {
    throw new Error('Invalid status update, you can only withdraw applications with APPLIED status')
  }

  const withdrawnApplication = await applicationsRepository.withdraw(data.applicationId)

  return withdrawnApplication
}
