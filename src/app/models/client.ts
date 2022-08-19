import { Address } from "./address";

export interface Client {
    id?: any
    username: String;
    name: String;
    cpf: String;
    email: String;
    password: String;
    address: Address;
} 
