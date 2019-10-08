import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/product-details.component';
import { EditComponent } from './edit/product-edit.component';
import { CreateComponent } from './create/product-create.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
//import { ProductCategoryListComponent } from './category-list/product-category-list.component';




@NgModule({
  declarations: [
  //ListComponent,
  DetailsComponent,
  EditComponent,
  CreateComponent,
 // ProductCategoryListComponent,
  

      ],  
  
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ]
 
})
export class ProductModule { }
