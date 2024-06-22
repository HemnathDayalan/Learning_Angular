import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-tf',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './templateforms.component.html',
  styleUrl: './templateforms.component.css'
})
export class TemplateformsComponent  {

  constructor(){

  }
  
  user = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  requiredMinLength = 8; // Define minimum password length

  onSubmit(form: NgForm) {
    console.log('Form submitted:', this.user);
    form.reset(); // Reset form after submission
  }

  

}
