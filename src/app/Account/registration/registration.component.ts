import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { NgForm, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  

  constructor(private accountservice:AccountService,
    ) { }
    operators:any={}
    private userregistererror : any
  ngOnInit() {
   
  }

 
  
  addnewuser(nf : NgForm)
  {
     var res = nf.value
     res.roles = "User"     
     this.accountservice.addnewuser(nf.value).subscribe((res)=>{      
       this.operators=res;
    },
    err=>{
       this.userregistererror=err.error.message;

    });
  }

  passwordCheck(nf : NgForm){
     if((nf.value.password)!=(nf.value.confirm_password)){
        return true
      }else{
        return false;
         }
  }
}
