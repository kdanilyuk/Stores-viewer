import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-updateprod',
  templateUrl: './updateprod.component.html',
  styleUrls: ['./updateprod.component.css']
})
export class UpdateprodComponent implements OnInit {

  newDescription;

  constructor(private _store: StoreService,
    private _router: Router) { }

  ngOnInit() {
  }


  Save(){
    this._store.oldProduct.description = this.newDescription;
    this._store.updateProduct()
    .subscribe(
      res => {
        if(res.isSuccessful) {
        }
      },
      err => console.log(err)
    );
    this._router.navigate(['/list-of-stores']);;
  }
}
