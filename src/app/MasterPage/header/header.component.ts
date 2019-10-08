import { Component, OnInit } from '@angular/core';
import { MasterpageService } from '../masterpage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _user:MasterpageService) { }

  ngOnInit() {
    this.cartauthenticate();
  }

  signout(){
    this._user.logout();
    
  }
  cartauthenticate(){
    if(localStorage.roles=="User"){
      return true;
    }else{
      return false;
    }

  }
profileauthenticate(){
  if(localStorage.roles=="Admin" || localStorage.roles=="User"){
    return true;
  }else{
    return false;
  }
}




}
