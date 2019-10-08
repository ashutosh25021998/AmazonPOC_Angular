import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddadminComponent implements OnInit {

  constructor(private accountservice:AccountService ) { }
  operators:any={}
  private adminregistererror:any
  ngOnInit() {
  }
addnewadmin(nf : NgForm)
  {
    console.log(nf.value);
     var res = nf.value
     res.roles = "Admin"
     this.accountservice.addnewadmin(nf.value).subscribe((res)=>{
       this.operators=res;
    },
    err=>{
this.adminregistererror=err.error.message;

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
