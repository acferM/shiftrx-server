import type { UsersRepository } from "../repositories/users-repository.js"

type ListUserServiceParams = {
  deps: {
    usersRepository: UsersRepository
  }
}

export async function ListUserService({ deps }: ListUserServiceParams) {
  const { usersRepository } = deps

  const users = await usersRepository.findAll()

  return users
}
