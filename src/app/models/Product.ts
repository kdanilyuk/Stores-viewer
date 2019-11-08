import { Store } from './Store';

export class Product{ 
    public productId: BigInteger;
    public name: string;
    public description: string;
    public storeId: BigInteger;
    public store: Store;
}