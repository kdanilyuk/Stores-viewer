import { Product } from './Product';

export class Store {
    public storeId: BigInteger;
    public name: string;
    public address: string;
    public openingTime: string;
    public closingTime: string;
    public products: Product;
}