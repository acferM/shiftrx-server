import type { Prisma } from "@generated/prisma/client.js";

export type FindAllShiftsParams = {
  relations: Prisma.ShiftInclude | null
}

export type HireParams = {
  shiftId: string
  userId: string
  applicationId: string
}

export type HireReturn = {
  shift: Prisma.ShiftModel
  application: Prisma.ApplicationModel
}

export interface ShiftsRepository {
  findById(id: string): Promise<Prisma.ShiftModel | null>
  findAll(params?: FindAllShiftsParams): Promise<Prisma.ShiftModel[]>
  hire(params: HireParams): Promise<HireReturn>
}
