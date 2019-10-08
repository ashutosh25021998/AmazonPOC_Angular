import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MasterpageService {

  constructor(private httpClient:HttpClient) { }

IsAuthenticate(){
  if (localStorage.token != null) {
    return true;
  } else {
    return false;
  }
}





logout() {
  localStorage.removeItem('token');
 localStorage.removeItem('roles');
 localStorage.removeItem('id');
 localStorage.removeItem('oprid');
}
}
