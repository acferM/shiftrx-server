import { ListUserService } from "../../services/list-users-service.js";
import { PrismaUsersRepository } from "../../repositories/implementations/prisma-users-repository.js";

const usersRepository = new PrismaUsersRepository()

export class UsersController {
  async index() {
    const users = await ListUserService({
      deps: {
        usersRepository
      }
    })

    return users
  }
}
