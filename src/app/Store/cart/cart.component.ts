import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { ProductService } from 'src/app/Product/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts: any = [];
  totalPrice: any;
  operators: any = [];
  userId: number;
  id: number;
  constructor(private storeservice: StoreService, private productservice: ProductService) { }

  ngOnInit() {
    this.userId = +localStorage.getItem('oprid');
    this.getCarts();
  }

  getCarts() {
    if (this.userId > 0) {
      this.storeservice.GetCart(this.userId).subscribe(
        (res: any) => {
          this.carts = res;
          this.totalPrice = +(this.carts
            .map(item => +item.totalprice)
            .reduce((prev, next) => prev + next));
        });
    }
  }

  funcAdd(id) {
    if (id) {
      const cart: any = {};
      cart.OperatorId = +localStorage.getItem('oprid');
      cart.ProductItemId = id;
      cart.Quantitycart = 1;
      this.storeservice.AddToCart(cart).subscribe((res: any) => {
        this.getCarts();
      });
    }
  }


  funcDel(cart: any) {
    if (cart) {

      // this.carts = +localStorage.getItem('oprid');
      cart.Quantitycart = 1;
      this.storeservice.RemoveCart(cart).subscribe((res: any) => {
        this.getCarts();
        
      });
    }

  }

  funcClear(cart: any) {
    if (cart) {

      this.storeservice.ClearCart(cart).subscribe((res: any) => {
        this.getCarts();
      });
    }
  }

  funcCartTotal(cart: any) {
    if (cart) {
      cart.OperatorId = +localStorage.getItem('oprid');
      this.storeservice.CartTotal(cart.OperatorId).subscribe((res: any) => {

        localStorage.setItem('total', res);
        this.totalPrice = localStorage.getItem('total');
        this.getCarts();
      });
    }
  }




}
