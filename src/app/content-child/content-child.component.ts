import { Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-child',
  standalone: true,
  imports: [],
  templateUrl: './content-child.component.html',
  styleUrl: './content-child.component.css'
})
export class ContentChildComponent implements OnInit{

  @ContentChild('htmlmarker') tsmarker! : ElementRef

  ngOnInit(): void {
      console.log(this.tsmarker);
  }
  ngAfterContentInit(){
    console.log(this.tsmarker.nativeElement.innerHTML);
  }

}
