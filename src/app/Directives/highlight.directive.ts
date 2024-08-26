import { Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  //click event
  host:{
    '(click)':'select()',
  }
})
export class HighlightDirective {
  private el:ElementRef | any;

  constructor(el: ElementRef) {
    this.el=el;
   }


   @Input() elements: any;

//view children functionalities
  select(){
    this.elements.forEach((elt: any ) => {
      elt.unselect();
    });

    this.el.nativeElement.style.backgroundColor = 'white';
    this.el.nativeElement.style.backgroundColor = '#D1D301';
  }

  unselect() {
    this.el.nativeElement.style.backgroundColor = 'black';
    this.el.nativeElement.style.backgroundColor = 'white';
  }
}


//custom directive

@Directive({
  selector: '[appStylisPara]'
})
export class StylisParaDirective implements OnInit {

  constructor(private el:ElementRef,private renderer:Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement,"padding","10px");
    this.renderer.setStyle(this.el.nativeElement,"background-color","grey");
    this.renderer.setStyle(this.el.nativeElement,"font","verdana"); 

  }

}


@Directive({
  selector: '[appBrownUnderline]'
})
export class BrownUnderlineDirective implements OnInit {

  constructor(private el: ElementRef,private renderer:Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, "color", "brown");
    this.renderer.setStyle(this.el.nativeElement, "font", "bold");
    this.renderer.setStyle(this.el.nativeElement, "text-decoration", "underline");
  }


}


@Directive({
  selector: '[datepicker]'
})
export class datepicker1 implements OnChanges  {

  constructor(private el: ElementRef) {

   }
   @Input() clickDate: any;

  ngOnChanges(changes: SimpleChanges): void {

    let date = new Date();
    let inputDate = new Date(this.clickDate);

    let inputDate1 = inputDate.toString().slice(0, 15);
    
   
    let today1 = date.toString().slice(0, 15);
    
   
  
  
    if(inputDate1 == today1){
      this.el.nativeElement.style.backgroundColor ="yellow";
    }

    else {
      this.el.nativeElement.style.backgroundColor = "transparent";
    }


  }
  
  }
  
