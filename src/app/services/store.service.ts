import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { Store } from '../models/Store';
import { Product } from '../models/Product';

@Injectable()
export class StoreService {

  private _storeUrl = "https://localhost:5001/api/store";

  oldProduct: Product;
  currentStoreId;
  currentProdId;

  constructor(private http: HttpClient,
              private _router: Router) { }

  getStoresList() {
    return this.http.get<any>(this._storeUrl + '/list');
  }

  getProductsList(storeId) {
    return this.http.get<any>(this._storeUrl + '/prodlist/' + storeId);
  }

  updateProduct() {
    return this.http.post<any>(this._storeUrl + '/updateproduct', this.oldProduct);
  }

  deleteProduct(product){
    return this.http.post<any>(this._storeUrl + '/removeproduct', product);
  }

  createProduct(product){
    const body = { product: product}
    return this.http.post<any>(this._storeUrl + '/createproduct', product);
  }
}