import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  getProductcategory(){
    return this.httpClient.get(`https://localhost:5001/api/products`);
  }
  getProductcategoryById(id){
    return this.httpClient.get(`https://localhost:5001/api/products`+id);
  }

  getNews(){
    return this.httpClient.get(`https://localhost:5001/api/ProductItems`);
  }
  

  getProductById(id){
    return this.httpClient.get("https://localhost:5001/api/ProductItems/"+id);
  }
  
   getProductDetailsById(id){
    return this.httpClient.get("https://localhost:5001/api/productitems/getbyid/"+id);
  }

  putProductById(id){
    return this.httpClient.get("https://localhost:5001/api/ProductItems/getvaluebyid/"+id);
  }

  updateProduct(product){
    return this.httpClient.put("https://localhost:5001/api/ProductItems/",product);
  }

  addProduct(prod){
    return this.httpClient.post("https://localhost:5001/api/ProductItems",prod);
  }

  deleteProductById(id){
    return this.httpClient.delete("https://localhost:5001/api/ProductItems/"+id);
  }

  

}
