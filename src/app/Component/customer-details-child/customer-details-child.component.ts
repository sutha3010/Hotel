import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-customer-details-child',
  templateUrl: './customer-details-child.component.html',
  styleUrls: ['./customer-details-child.component.css']
})
export class CustomerDetailsChildComponent {
// child array values
@Input() childCustomer :any;

customers = [
  "James", 
  "Josephine",
  "Art"

]

}
