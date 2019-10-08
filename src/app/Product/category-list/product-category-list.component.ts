import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-category-list',
  templateUrl: './product-category-list.component.html',
  styleUrls: ['./product-category-list.component.css']
})
export class ProductCategoryListComponent implements OnInit {

  constructor(private productservice:ProductService,
    private activatedRoute:ActivatedRoute) { }
  products : any
  id
  ngOnInit() {
 
    this.productservice.getProductcategory()
      .subscribe(
        res=>{
          this.products=res
          console.log(res)
        },
        err=>{
          console.log(err)
        }
      )

  }
 



}
