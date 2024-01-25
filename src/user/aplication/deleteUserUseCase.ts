import { UserRepository } from "../domain/userRepository";

export class DeleteUserUseCase{
    constructor( readonly userRepository: UserRepository){}
    async run ( name: string): Promise<boolean>{
        try{
            const deletedUser = await this.userRepository.deleteUser(name);
            return deletedUser;
        } catch(error){
            console.error('Error in DeleteUserCase', error);
            return false;
        }
        
    }
    
}
