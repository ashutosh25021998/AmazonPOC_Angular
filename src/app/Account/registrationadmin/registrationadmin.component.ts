import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-registrationadmin',
  templateUrl: './registrationadmin.component.html',
  styleUrls: ['./registrationadmin.component.css']
})
export class RegistrationadminComponent implements OnInit {

  constructor(private accountservice:AccountService) { }
 
  ngOnInit() {
  }
  
}
