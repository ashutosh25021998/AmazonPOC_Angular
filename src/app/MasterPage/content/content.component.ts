import { Component, OnInit } from '@angular/core';
import { ContentService } from './content.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private contentservice:ContentService) { }
product
  ngOnInit() {
    this.contentservice.getNews().subscribe((res)=>{
    console.log(res);
    this.product = res;
  });

  }

}
