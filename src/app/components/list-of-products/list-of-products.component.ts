import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { StoreService } from 'src/app/services/store.service';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.css']
})
export class ListOfProductsComponent implements OnInit {

  products: Product[]

  constructor(private _store: StoreService,
              private _router: Router) { }

  ngOnInit() {
    this.UpdateTable();
  }

  UpdateTable(){
    this._store.getProductsList(this._store.currentStoreId)
    .subscribe(
      res => {
        this.products = res;
      },
      err => console.log(err)
    ) 
  }

  UpdateProduct(prod: Product){
    this._store.oldProduct = prod;
    this._router.navigate(['/updateprod']);
  }

  DeleteProduct(prod: Product){
    this._store.deleteProduct(prod)
    .subscribe(
      res => {},
      err => console.log(err)
    );
    this.UpdateTable();
  }
}
