import { Component, ViewChildren } from '@angular/core';
import { HighlightDirective } from 'src/app/Directives/highlight.directive';

@Component({
  selector: 'app-food-items',
  templateUrl: './food-items.component.html',
  styleUrls: ['./food-items.component.css']
})
export class FoodItemsComponent {

  Addition = '';
  newAdd(result: any) {
    this.Addition = result;
  }
//
//Titlecase
  food: any="food is veRRRRRRy tastyYYYYYYYYYY";
   head:any="2. *ngFor directive and custom directive ";
   head3:any="3. @Input decorator";
   head4:any="4. search filter using custom pipe";
   head5:any="5. custom directive that displays a tooltip";





  @ViewChildren(HighlightDirective)elements:HighlightDirective[] | undefined;
  //ngfor directive
  foodName: string ="";

		items = [

			 "Ginataang Sugpo",
	     "Beef Caldereta",
			 "Pinangat",
        "Tanigue",
       "Vegetable Salad",
       "Porkchop",
       "Plain",
]

//input decorator
//passes an array of objects to a child component
foodParent: object = [
  { foodPrice: 100, foodName: 'Ginataang Sugpo' },
  { foodPrice: 250, foodName: 'Pinangat' },
  { foodPrice: 300, foodName: 'Tanigue' },
  { foodPrice: 460, foodName: 'Porkchop' },
  { foodPrice: 500, foodName: 'Plain' },
  { foodPrice: 640, foodName: "Beef Caldereta"}

];

}
