import { Component } from '@angular/core';

@Component({
  selector: 'app-trv',
  standalone: true,
  imports: [],
  templateUrl: './template-reference-variable.component.html',
  styleUrl: './template-reference-variable.component.css'
})
export class TemplateReferenceVariableComponent {

  emptystring:string ="";

  onclick(inpute1 : HTMLInputElement){
    // alert(`You entered: ${inpute1.value}`);
    alert("The Value of TemprefVar is" +inpute1.value );
    this.emptystring = inpute1.value;
    console.log(inpute1.value);
  }
}
