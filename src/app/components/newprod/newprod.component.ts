import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-newprod',
  templateUrl: './newprod.component.html',
  styleUrls: ['./newprod.component.css']
})
export class NewprodComponent implements OnInit {

  name;
  description;

  constructor(private _store: StoreService,
              private _router: Router) { }

  ngOnInit() {
  }

  AddProduct(){
    let prod = { name: this.name,
      description: this.description,
      storeId: this._store.currentStoreId};
    this._store.createProduct(prod)
    .subscribe(
      res => {
        if(res.isSuccessful) {
          
        }
      },
      err => console.log(err)
    );
    this._router.navigate(['/list-of-stores']);
  }
}
