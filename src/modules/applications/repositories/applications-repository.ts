import type { Prisma } from "@generated/prisma/client.js";

export type FindByShiftAndUserParams = {
  shiftId: string
  userId: string
}

export type FindAllByUserIdParams = {
  userId: string
  relations: Prisma.ApplicationInclude | null
}

export type CreateApplicationParams = {
  shiftId: string
  userId: string
}

export interface ApplicationsRepository {
  findById(id: string): Promise<Prisma.ApplicationModel | null>;
  findByShiftAndUser(params: FindByShiftAndUserParams): Promise<Prisma.ApplicationModel | null>;
  findAllByUserId(params: FindAllByUserIdParams): Promise<Prisma.ApplicationModel[]>;
  create(params: CreateApplicationParams): Promise<Prisma.ApplicationModel>;
  withdraw(applicationId: string): Promise<Prisma.ApplicationModel>;
  reApply(applicationId: string): Promise<Prisma.ApplicationModel>;
}
