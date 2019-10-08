import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MasterpageService } from 'src/app/MasterPage/masterpage.service';
import { tokenName } from '@angular/compiler';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private displayError : any;
  constructor(private accountservice:AccountService, private masterpageService: MasterpageService,
    private activatedRoute:ActivatedRoute,private router:Router) { }
operators:any=[];

  ngOnInit() {
    
  }

  verifylogin(nf : NgForm)
  {  
    this.accountservice.verifylogin(nf.value).subscribe((res:any)=>{
      localStorage.setItem('token',res.token);
      localStorage.setItem('roles',res.roles);
      localStorage.setItem('oprid',res.oprid);
      if(res.roles == "Admin"){
        this.router.navigate(['/registrationadmin'])
      }
      else{
        this.router.navigate([''])
      }
      
    },
    err=>{
      this.displayError = "The Username Or Password Is incorrect"
    }
    
    
    );
  }
  
 
}
