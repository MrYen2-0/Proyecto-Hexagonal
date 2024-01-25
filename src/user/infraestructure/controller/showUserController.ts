import {Request, Response} from "express";
import { ShowUserUseCase } from "../../aplication/ShowUserUseCase";

export class ShowUserController{
    constructor(readonly showUserUsecase: ShowUserUseCase){}

    async run (req: Request, res: Response){
        try{
            let name = req.query.name;
            if (typeof name !== 'string') {
                return res.status(400).send({
                    status: "Error",
                    Message:"Nombre de usuario no válido"
                });
            }
            let user = await this.showUserUsecase.run(name);
    
            if (user) {
                return res.status(200).send({
                    status: "success",
                    data:{
                        name: user.name,
                        last_name: user.last_name
                    },
                    message: "User Mostrado"
                })
                
            }else{
                return res.status(400).send({
                    status: "Error",
                    Message:"Error Al Mostrar User"
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
