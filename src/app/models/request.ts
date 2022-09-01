import { Address } from "./address";
import { Client } from "./client";
import { Product } from "./product"

export interface Request {
    id?: any;
    quantidade: number;
    price: number;
    time: string;
    client: Client;
    product: Product;
    address: Address;
}
