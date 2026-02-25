import { Component } from '@angular/core';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialogbox',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './dialogbox.component.html',
  styleUrl: './dialogbox.component.css'
})
export class DialogboxComponent {
  /**
   *
   */
  constructor(private ref:MatDialogRef<DialogboxComponent>) {
    
  }
  closepopup(){
    this.ref.close();
  }

}
