import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOfStoresComponent } from './components/list-of-stores/list-of-stores.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreService } from './services/store.service';
import { ListOfProductsComponent } from './components/list-of-products/list-of-products.component';
import { NewprodComponent } from './components/newprod/newprod.component';
import { UpdateprodComponent } from './components/updateprod/updateprod.component';

@NgModule({
  declarations: [
    AppComponent,
    ListOfStoresComponent,
    ListOfProductsComponent,
    NewprodComponent,
    UpdateprodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
