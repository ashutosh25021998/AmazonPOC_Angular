import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { StoreService } from 'src/app/Store/store.service';

@Component({
  selector: 'app-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private productservice:ProductService,
              private activatedRoute:ActivatedRoute,private storeservice:StoreService) { }
  products : any = {}
  id :number
  totalPrice
 

  ngOnInit() {
    console.log("Inside ngOnInit of product-details component")
      this.activatedRoute.params.subscribe(routeParams => {
        this.loadProductDetail(routeParams.id);
       this.admincheck();
              localStorage.setItem('id',routeParams.id);
              
      }); 
    }

    funcAdd(id) {
      this.products.OperatorId = localStorage.getItem('oprid');
    this.products.ProductItemId = id;
    this.products.Quantitycart = 1;
    this.storeservice.AddToCart(this.products).subscribe((res: any) => {
      this.ngOnInit();
     
    });
    }


    loadProductDetail(id){
      this.productservice.getProductDetailsById(id)
      .subscribe(
        res=>{         
        this.products = res;
          console.log(res)
        },
        err=>{
          console.log(err);
        }
      )}

    ConfirmDelete(id){
  var del = confirm("Are you sure you want to delete?");  
  if (del){
    this.productservice.deleteProductById(id)
      .subscribe(
        res=>{
           console.log("res")
        },
        err=>{
          console.log("err")
        }
      )
  }     
}


    admincheck(){
      if(localStorage.roles=="Admin"){
        return true;
        }
        
        else{
         return false;
      }
     }
     usercheck(){
      if(localStorage.roles=="User"){
        return true;
        }
        
        else{
         return false;
      }
     }
  
     



} 
