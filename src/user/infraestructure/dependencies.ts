import { PgsqUserRepository } from "./pgsqlUserRepository";

import { AddUserUseCase } from "../aplication/addUserUseCase";
import { AdduserController } from "./controller/addUserController";

export const pgsqlUserRepository = new PgsqUserRepository();

export const addUserUseCase = new AddUserUseCase(pgsqlUserRepository);

export const addUserController = new AdduserController(addUserUseCase);