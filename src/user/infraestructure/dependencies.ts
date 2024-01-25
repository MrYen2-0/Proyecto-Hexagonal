import { PgsqUserRepository } from "./pgsqlUserRepository";

import { AddUserUseCase } from "../aplication/addUserUseCase";
import { AdduserController } from "./controller/addUserController";
import { DeleteUserUseCase } from "../aplication/deleteUserUseCase";
import { DeleteUserController } from "./controller/deleteUserController";

import { ShowUserUseCase } from "../aplication/ShowUserUseCase";
import { ShowUserController } from "./controller/showUserController";

import { GetUsersUseCase } from "../aplication/getUsersUseCase";
import { GetUsersController } from "./controller/getUsersController";


export const pgsqlUserRepository = new PgsqUserRepository();

export const addUserUseCase = new AddUserUseCase(pgsqlUserRepository);
export const addUserController = new AdduserController(addUserUseCase);


export const deleteUserUseCase = new DeleteUserUseCase(pgsqlUserRepository);
export const deleteUserController = new DeleteUserController(deleteUserUseCase);


export const showUserUseCase = new ShowUserUseCase(pgsqlUserRepository);
export const showUserController = new ShowUserController(showUserUseCase);


export const getUsersUseCase = new GetUsersUseCase(pgsqlUserRepository);
export const getUsersController = new GetUsersController(getUsersUseCase);
