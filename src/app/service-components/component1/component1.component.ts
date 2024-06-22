import { Component } from '@angular/core';
import { DataTransferService } from '../../Services/data-transfer.service';

@Component({
  selector: 'app-component1',
  standalone: true,
  imports: [],
  templateUrl: './component1.component.html',
  styleUrl: './component1.component.css'
})
export class Component1Component {

  constructor(private data : DataTransferService) {}

  enteredtext: string ="" ;

  onInputChange(event: Event) {
    const inputElement = (event.target as HTMLInputElement);
    this.enteredtext = inputElement.value;
    console.log(this.enteredtext); // Example usage
  }

  ontrans(){
    this.data.raisedatatransfer(this.enteredtext)
  }

  

}
