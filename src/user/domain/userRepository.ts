import { User } from "./user";

export interface UserRepository{
    addUser(name: string, last_name: string): Promise<User | null>;
    
}

export interface UserRepository{
    addUser(name: string, last_name: string): Promise<User | null>;
    deleteUser(name: string): Promise<boolean>;
}

export interface UserRepository{
    addUser(name: string, last_name: string): Promise<User | null>;
    deleteUser(name: string): Promise<boolean>;
    showUser(name: string): Promise<User | null>;
}


