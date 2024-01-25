import { User } from "../domain/user";
import { UserRepository } from "../domain/userRepository";

export class ShowUserUseCase{
    constructor( readonly userRepository: UserRepository){}
    async run ( name: string): Promise<User | null>{
        try{
            const user = await this.userRepository.showUser(name);
            return user;
        } catch(error){
            console.error('Error in ShowUserCase', error);
            return null;
        }
        
    }
}
