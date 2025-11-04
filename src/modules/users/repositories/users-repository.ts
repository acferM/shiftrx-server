import type { Prisma } from "@generated/prisma/client.js";

export interface UsersRepository {
  findAll(): Promise<Prisma.UserModel[]>
}
