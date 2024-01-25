import {Request, Response} from "express";
import { DeleteUserUseCase } from "../../aplication/deleteUserUseCase";

export class DeleteUserController{
    constructor(readonly deleteUserUsecase: DeleteUserUseCase){}

    async run (req: Request, res: Response){
        try{
            let {name} = req.body;
            let deletedUser = await this.deleteUserUsecase.run(name);
    
            if (deletedUser) {
                return res.status(200).send({
                    status: "success",
                    message: "User Eliminado"
                })
                
            }else{
                return res.status(400).send({
                    status: "Error",
                    Message:"Error Al Eliminar User"
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
