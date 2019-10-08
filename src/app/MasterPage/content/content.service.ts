import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private httpClient:HttpClient) { }

  getNews(){
     return this.httpClient.get(`https://localhost:5001/api/ProductItems`);
  }
}