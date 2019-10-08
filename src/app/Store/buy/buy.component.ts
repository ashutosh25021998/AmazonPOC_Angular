import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  userId: number;
  carts: any = [];
  totalPrice: any;
  location: any;
  order: any = [];
  lid: number;
  server: number;
  id: any;
  locations: any = [];
 displayError : any;
  constructor(private storeservice: StoreService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.userId = +localStorage.getItem('oprid');
    if (this.userId) {
      this.getCarts();
      this.getlocations();
    }

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

  getlocationbyliduid(locationId: number) {
    if (this.userId > 0) {
      this.storeservice.GetLocation(this.userId, locationId).subscribe(
        (res: any) => {
          this.location = res;
          console.log(this.location)

        });
    }
  }

  getlocations() {
    if (this.userId > 0) {
      this.storeservice.GetLocationById(this.userId).subscribe(
        (res: any) => {
          this.location = res;
          console.log(res)
                 

        });
    }
  }

  AddLocation(nf: NgForm) {
    console.log(nf.value)
    nf.value.operatorId = this.userId;
    nf.value.locationId = this.location.locationId
    console.log(nf.value);
    this.storeservice.addLocation(nf.value).subscribe((res) => {     
     console.log(res)
    },
      err => {
       // this.displayError = err.error.message;
       console.log(err);
      });
  }



}
