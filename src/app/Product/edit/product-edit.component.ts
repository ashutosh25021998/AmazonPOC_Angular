import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private productservice:ProductService,
                private activatedRoute:ActivatedRoute) { }

  products : any={}
  id
  ngOnInit() {

    console.log("Inside ngOnInit")
      this.activatedRoute.params.subscribe(routeParams => {
        this.id = routeParams.id
        this.editProductDetail(routeParams.id);
      }); 
  }


  editProductDetail(id){
    this.productservice.putProductById(id)
    .subscribe(
      res=>{         
      this.products = res;

      },
      err=>{
        console.log(err);
      }
    )
  }

  updateProduct(nf:NgForm){
    var updatedproduct = nf.value
    updatedproduct.productItemId = this.id
    console.log(nf.value)
    this.productservice.updateProduct(updatedproduct).subscribe((res)=>{
     // updatedproduct=res;
            console.log("Upadted")
        },
        err=>{
            console.log("Error")
        }
      )

  }

}
