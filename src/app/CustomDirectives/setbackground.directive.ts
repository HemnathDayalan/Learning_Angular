import { Directive, ElementRef, Input, OnInit  } from "@angular/core";

@Directive({
    selector:'setBackground',
    standalone:true
})

export class SetBackgroundDirective implements OnInit{
    @Input('appBackgroundColor') bgcolo!: string;
    constructor(private element: ElementRef){

    }
    ngOnInit(): void {
        this.element.nativeElement.style.backgroundColor = this.bgcolo;
    }
}