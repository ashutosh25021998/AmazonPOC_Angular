import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private httpClient: HttpClient) { }



  public GetCart(userId: number) {
    return this.httpClient.get('https://localhost:5001/api/Carts/getCart/' + userId);
  }

  public RemoveCart(model) {
    return this.httpClient.post('https://localhost:5001/api/Carts/removeFromCart', model);
  }

  public ClearCart(model) {
    return this.httpClient.post('https://localhost:5001/api/Carts/clearCart', model);
  }

  public CartTotal(model) {
    return this.httpClient.post('https://localhost:5001/api/Carts/getTotal', model);
  }
  public AddToCart(model) {
    return this.httpClient.post('https://localhost:5001/api/Carts/addToCart', model);
  }

  public addLocation(location) {
    return this.httpClient.post('https://localhost:5001/api/Operator/addlocation', location);
  }
  public UpdateLocation(location) {
    return this.httpClient.post('https://localhost:5001/api/Operator/updatelocation', location);
  }
  public GetLocation(Uid, Lid) {
    return this.httpClient.get('https://localhost:5001/api/Operator/getlocation/' + Uid + '/' + Lid);
  }
  public GetLocationById(Uid) {
    return this.httpClient.get('https://localhost:5001/api/Operator/getlocationbyid/' + Uid);
  }
  public DeleteLocationById(Uid, Lid) {
    return this.httpClient.delete('https://localhost:5001/api/Operator/deletelocationbyid/' + Uid + '/' + Lid);
  }




}
