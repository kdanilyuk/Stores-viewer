import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { Store } from 'src/app/models/Store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-of-stores',
  templateUrl: './list-of-stores.component.html',
  styleUrls: ['./list-of-stores.component.css']
})
export class ListOfStoresComponent implements OnInit {

  stores: Store[]

  constructor(private _store: StoreService,
              private _router: Router) { }

  ngOnInit() {
    this.UpdateTable();
    this._store.currentStoreId = undefined;
  }

  UpdateTable(){
    this._store.getStoresList()
    .subscribe(
      res => {
        this.stores = res;
      },
      err => console.log(err)
    ) 
  }

  ViewProducts(storeId){
    this._store.currentStoreId = storeId;
    this._router.navigate(['/list-of-products']);
  }
}
