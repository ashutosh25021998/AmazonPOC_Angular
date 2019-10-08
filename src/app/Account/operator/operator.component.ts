import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {

  constructor(private accountservice:AccountService) { }
  operators:any=[];
  id
  ngOnInit() {

    this.accountservice.getadmindata()
    .subscribe(
      res=>{         
      this.operators = res;
        console.log(res)
      },
      err=>{
        console.log(err);
      }
    )
  }
  ConfirmDelete(id){
    var del = confirm("Are you sure you want to delete?");  
    if (del){
      this.accountservice.deleteoperator(id)
        .subscribe(
          res=>{
             console.log("res")
          },
          err=>{
            console.log("err")
          }
        )
    }     
  
    }
   
  

}
