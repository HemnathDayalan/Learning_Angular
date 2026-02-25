import { Component } from '@angular/core';
import { DataTransferService } from '../../Services/data-transfer.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-component1',
  standalone: true,
  imports: [],
  templateUrl: './component1.component.html',
  styleUrl: './component1.component.css'
})
export class Component1Component {

  inputValue: string = '';

  constructor(private dataTransferService: DataTransferService) {}

  onInputChange(value: string) {
    this.dataTransferService.setData(value);
  }

}
