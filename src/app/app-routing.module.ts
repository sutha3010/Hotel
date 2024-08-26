import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodItemsComponent } from './Component/food-items/food-items.component';
import { CustomerDetailsComponent } from './Component/customer-details/customer-details.component';
import { AboutComponent } from './Component/about/about.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './Component/home/home.component';

const routes: Routes = [
  
  {path: '',component:HomeComponent},
  {path: 'food-items',component:FoodItemsComponent},
  {path: 'customer-details',component:CustomerDetailsComponent},
  {path:'about',component:AboutComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
