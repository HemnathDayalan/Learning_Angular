import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() Msgfromparent: string = "";

  MsgfromChild : string = "";

  @Output() eventtrigger: EventEmitter<any> = new EventEmitter<any>();

  eventfunction(){
    this.eventtrigger.emit(this.MsgfromChild);
    console.log(this.MsgfromChild);
  }




}
