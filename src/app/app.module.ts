import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodItemsComponent } from './Component/food-items/food-items.component';
import { CustomerDetailsComponent } from './Component/customer-details/customer-details.component';
import { AboutComponent } from './Component/about/about.component';
import { HomeComponent } from './Component/home/home.component';
import { CustomPipePipe,FilterPipe,TruncatePipe,filter1 } from './Pipes/custom-pipe.pipe';
import { HighlightDirective,StylisParaDirective,BrownUnderlineDirective,datepicker1 } from './Directives/highlight.directive';
import { FoodItemsChildComponent } from './Component/food-items-child/food-items-child.component';
import { TooltipDirective } from './Directives/tooltip.directive';
import { CustomerDetailsChildComponent } from './Component/customer-details-child/customer-details-child.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    FoodItemsComponent,
    CustomerDetailsComponent,
    AboutComponent,
    HomeComponent,
    CustomPipePipe,
    FilterPipe,
    TruncatePipe,
    HighlightDirective,
    FoodItemsChildComponent,
    TooltipDirective,
    StylisParaDirective,
    BrownUnderlineDirective,
    CustomerDetailsChildComponent,
    filter1,
    datepicker1,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule { }
