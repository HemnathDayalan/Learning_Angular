import { Component, ElementRef, OnInit, ViewChild, ViewChildren, ContentChild } from '@angular/core';


@Component({
  selector: 'app-view-child',
  standalone: true,
  imports: [],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css'
})
export class ViewChildComponent implements OnInit{
  ngOnInit() {
    console.log(this.TSmarker);
  }


  @ViewChild('myDateInput') birthday!:ElementRef;
  @ViewChild('dateintext') textfield! : ElementRef;

  @ContentChild('htmlmarker') TSmarker! : ElementRef;

  calc_age(){
    let date = new Date(this.birthday.nativeElement.value).getFullYear();
    let today = new Date().getFullYear();
    let age;
    age = today - date;
    console.log(this.birthday);
    console.log(this.textfield.nativeElement.value);

  }
}


