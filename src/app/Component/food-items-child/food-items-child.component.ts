import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-food-items-child',
  templateUrl: './food-items-child.component.html',
  styleUrls: ['./food-items-child.component.css']
})
export class FoodItemsChildComponent {
//input decorator
  @Input() foodChild: any;

  @Output()sum = new EventEmitter<number>();


   //create function to emit child
   onSubmit(f:any){
    let num1=f.value.order1;
    let num2=f.value.order2;
    let result=(num1+num2);
    this.sum.emit(result);
  }

}
