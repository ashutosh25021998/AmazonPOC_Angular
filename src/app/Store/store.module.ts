import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BuyComponent } from './buy/buy.component';
import { OrdersComponent } from './orders/orders.component';



@NgModule({
  declarations: [
    CartComponent,
    WishlistComponent,
    BuyComponent,
    OrdersComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ]
})
export class StoreModule { }
