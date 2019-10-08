import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  operator:any={};
  id:any;
  constructor(private accountservice:AccountService) { }

  ngOnInit() {
    
   this. operator.operatorId=localStorage.oprid;
   console.log(this.operator);
    this.accountservice.getoperatorbyid(this.operator.operatorId)
        .subscribe((res: any) => { 
          console.log(res)
      this.operator=res;
    },
    err=>{
      console.log(err)
    });

   

  }
  Userauthenticate(){
    if(localStorage.roles=="User"){
      return true;
    }else{
      return false;
    }

  }

  

}
