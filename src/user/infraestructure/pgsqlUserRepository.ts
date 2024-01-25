import { User } from "../domain/user";
import { UserRepository } from "../domain/userRepository";
import UserModel from "./model/userModel";


export class PgsqUserRepository implements UserRepository{

    async addUser(name: string, last_name: string): Promise<User | null> {
        try{
            const createdUser = await UserModel.create({name, last_name});
            return new User(createdUser.id, createdUser.name, createdUser.last_name);
        }catch(error){
            console.error("Error In Psql", error)
            return null;
        }
    }

    async deleteUser(name: string): Promise<boolean> {
        try{
            const deletedUser = await UserModel.destroy({where: {name}});
            return !!deletedUser;
        }catch(error){
            console.error("Error In Psql", error)
            return false;
        }
    }

    async showUser(name: string): Promise<User | null> {
        try{
            const user = await UserModel.findOne({where: {name}});
            if(user){
                return new User(user.id, user.name, user.last_name);
            }
            return null;
        }catch(error){
            console.error("Error In Psql", error)
            return null;
        }
    }
    
    async getUsers(): Promise<User[] | null> {
        try{
            const users = await UserModel.findAll();
            if(users){
                return users.map(user => new User(user.id, user.name, user.last_name));
            }
            return null;
        }catch(error){
            console.error("Error In Psql", error)
            return null;
        }
    }
    
    
}