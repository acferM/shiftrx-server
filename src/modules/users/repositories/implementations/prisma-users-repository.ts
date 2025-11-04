import type { UserModel } from "@generated/prisma/models.js";
import type { UsersRepository } from "../users-repository.js";
import { prisma } from "@/singletons/prisma.js";

export class PrismaUsersRepository implements UsersRepository {
  async findAll(): Promise<UserModel[]> {
    return prisma.user.findMany()
  }
}
