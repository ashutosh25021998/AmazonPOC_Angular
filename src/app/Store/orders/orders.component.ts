import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  userId: number;
  carts: any = [];
  totalPrice: any;
  location:any = {}
  id
  constructor(private storeservice: StoreService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.userId = +localStorage.getItem('oprid');
    this.getCarts();
    this.getlocation();

    
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

  getlocation(){
    if (this.userId > 0) {
      this.storeservice.GetLocationById(this.userId).subscribe(
        (res: any) => {
          this.location = res;
          console.log( this.location)
          
        });
    }
  }

}
