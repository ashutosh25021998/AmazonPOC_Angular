import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private productservice:ProductService) { }

    products : any = {}

  ngOnInit() {
    
  }

  updateProduct(nf : NgForm)
  {
    console.log(nf.value)
    this.productservice.addProduct(nf.value).subscribe((res)=>{
      console.log(res);
      this.products=res;
    });
  }
 


}
