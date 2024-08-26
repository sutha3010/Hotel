import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent {
  
  // clickDate = this.datepipe.transform(new Date().getTime(),"yyyy-MM-dd");
constructor(private datepipe: DatePipe){

}

clickDate:any=this.datepipe.transform(new Date().getTime(),'yyyy-MM-dd');



//titlecase
head7: any = "7. datepicker";
head8: any = "8. Custom Truncate and ellipsis";
head10: any = "10. parent component";
heading: any = "child component";


details: string = "";
customers = [
  {
    firstName: "James",
    lastName: "Butterburg",
    address: "6649 N Blue Gum St",
    city: "New Orleans"
  },

  {
    firstName: "Josephine",
    lastName: "Darakjy",
    address: "4 B Blue Ridge Blvd",
    city: "Brighton"
  },

  {
    firstName: "Art",
    lastName: "Chemel",
    address: "8 W Cerritos Ave 54",
    city: "Bridgeport",
  },

]


str = "angular is a single page application";
//input decorator for parent component
parentCustomer: string = "";



}
