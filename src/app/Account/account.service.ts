import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient:HttpClient) { }
  verifylogin(user){
    return this.httpClient.post("https://localhost:5001/api/Operator/login",user);
  }
  
  addnewuser(user){
    return this.httpClient.post("https://localhost:5001/api/Operator/Registrationuser",user);
  } 
  addnewadmin(admin){
    var t=localStorage.getItem("token");
    const headers = {
      headers : new HttpHeaders().set('Authorization', "Bearer " + t)
    }

    return this.httpClient.post("https://localhost:5001/api/Operator/Registrationadmin",admin, headers);
  }
  adminauthenticate(){
    if(localStorage.roles=="Admin"){          
      return true;
    }else{      
      
    return false;
   }
  }
  getadmindata(){
    return this.httpClient.get("https://localhost:5001/api/Operator");
  }
  getadmindatabyid(id){
    return this.httpClient.get("https://localhost:5001/api/Operator/"+id);
  }
  deleteoperator(id){
    return this.httpClient.delete("https://localhost:5001/api/Operator/Deleteoperator/"+id);
  }
  getoperatorbyid(id){
         return this.httpClient.get("https://localhost:5001/api/Operator/Getoperator/"+id);
  }
}

