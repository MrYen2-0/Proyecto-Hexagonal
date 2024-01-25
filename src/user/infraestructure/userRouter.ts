import express from "express"

import { addUserController, deleteUserController, showUserController } from "./dependencies";



export const userRouter = express.Router();

userRouter.post(
    "/create",addUserController.run.bind(addUserController)
);

userRouter.delete(
    "/delete", deleteUserController.run.bind(deleteUserController)
);

userRouter.get(
    "/mostrar", showUserController.run.bind(showUserController)
);
