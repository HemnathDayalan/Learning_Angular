import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '../../Services/data-transfer.service';

@Component({
  selector: 'app-component2',
  standalone: true,
  imports: [],
  templateUrl: './component2.component.html',
  styleUrl: './component2.component.css'
})
export class Component2Component implements OnInit{
  constructor(private data : DataTransferService){}
  inputtext : string ="";

  ngOnInit(): void {
      //subscribing to the data emitter
      this.data.dataTransfer.subscribe((value)=> {
        console.log('value - '+ value);
        console.log('swapped value - '+ this.inputtext);
        this.inputtext = value;
      });
  }

  

}
