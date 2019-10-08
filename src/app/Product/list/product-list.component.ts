import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private productservice:ProductService,
    private activatedRoute:ActivatedRoute) { }
products : any = []
id

  ngOnInit() {
    console.log("inside ngOnit of product-list component");

    this.activatedRoute.params.subscribe(routeParams => {
      this.loadProductlist(routeParams.id);
    }); 
  }
  loadProductlist(id){
    this.productservice.getProductById(id)
      .subscribe(
        res=>{         
        this.products = res;
          console.log(res)
        },
        err=>{
          console.log(err);
        }
      )
  }

  admincheck(){
    if(localStorage.roles=="Admin"){
      return true;
      }else{
       return false;
    }
   }


}
