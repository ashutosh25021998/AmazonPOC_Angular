import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './MasterPage/content/content.component';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { DetailsComponent } from './Product/details/product-details.component';
import { EditComponent } from './Product/edit/product-edit.component';
import { CreateComponent } from './Product/create/product-create.component';
import { ListComponent } from './Product/list/product-list.component';
import { LoginComponent } from './Account/login/login.component';
import { RegistrationComponent } from './Account/registration/registration.component';
import { ProductCategoryListComponent } from './Product/category-list/product-category-list.component';
import { RegistrationadminComponent } from './Account/registrationadmin/registrationadmin.component';
import { AddadminComponent } from './Account/addadmin/addadmin.component';
import { OperatorComponent } from './Account/operator/operator.component';
import { CartComponent } from './Store/cart/cart.component';
import { WishlistComponent } from './Store/wishlist/wishlist.component';
import { BuyComponent } from './Store/buy/buy.component';
import { ProfileComponent } from './Account/profile/profile.component';
import { OrdersComponent } from './Store/orders/orders.component';


const routes: Routes = [
// {path:'productitem-crud',component:ProductitemCRUDComponent},
//{path:'**',component:ProductCategoryListComponent, pathMatch:'full'},
{path:'',component:ProductCategoryListComponent,pathMatch:'full'},
{path:'details/:id',component:DetailsComponent},
{path:'edit/:id',component:EditComponent},
{path:'create',component:CreateComponent},
{path:'list/:id',component:ListComponent},
{path:'login',component:LoginComponent},
{path:'registration',component:RegistrationComponent},
{path:'registrationadmin',component:RegistrationadminComponent},
{path:'addadmin',component:AddadminComponent},
{path:'operator',component:OperatorComponent},
{path:'cart',component:CartComponent},
{path:'wishlist',component:WishlistComponent},
{path:'buy',component:BuyComponent},
{path:'profile',component:ProfileComponent},
{path:'orders',component:OrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
