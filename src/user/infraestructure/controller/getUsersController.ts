import {Request, Response} from "express";
import { GetUsersUseCase } from "../../aplication/getUsersUseCase";

export class GetUsersController{
    constructor(readonly getUsersUsecase: GetUsersUseCase){}

    async run (req: Request, res: Response){
        try{
            let users = await this.getUsersUsecase.run();

            if (users) {
                return res.status(200).send({
                    status: "success",
                    data: users,
                    message: "Usuarios obtenidos"
                })
                
            }else{
                return res.status(400).send({
                    status: "Error",
                    Message:"Error al obtener usuarios"
                });
            }
        }catch(error){
            console.error("Error In Controller", error);
            res.status(500).send({
                status: "error",
                Message: "Error In Server"
            });
        }
    }
}
