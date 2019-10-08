import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './MasterPage/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentComponent } from './MasterPage/content/content.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductModule } from './Product/product.module';
import { ListComponent } from './Product/list/product-list.component';
import { ProductCategoryListComponent } from './Product/category-list/product-category-list.component';
import { LoginComponent } from './Account/login/login.component';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './Account/registration/registration.component';
import { AccountModule } from './Account/account.module';
import { StoreModule } from './Store/store.module';
import { StoreService } from './Store/store.service';
import { ProductService } from './Product/product.service';
import { MasterpageService } from './MasterPage/masterpage.service';
import { AccountService } from './Account/account.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    ListComponent,
    ProductCategoryListComponent,

    
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    HttpClientModule,
    ProductModule, 
    FormsModule,
     AccountModule,
     StoreModule,
    
  ],
  providers: [StoreService,ProductService,MasterpageService,AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
