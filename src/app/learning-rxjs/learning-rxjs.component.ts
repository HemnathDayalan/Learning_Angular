import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-learning-rxjs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './learning-rxjs.component.html',
  styleUrl: './learning-rxjs.component.css'
})
export class LearningRxjsComponent {

  emptyArrayToSaveObservable = [];
  SubjMessage:any = '';

  myObservable = new Observable((observer) => {
    observer.next([1,2,3,4,5]); // streaming all data at once 
  //   setTimeout(() =>{
  //     observer.next(1);
  //   },1000)
  //   setTimeout(() =>{
  //     observer.next(2);
  //   },2000)
  //   setTimeout(() =>{
  //     observer.next(3);
  //   }, 3000)
  //   setTimeout(() =>{
  //     observer.next(4);
  //   },4000)
  //   setTimeout(() =>{
  //     observer.next(5);
  //   }, 5000)
  });

  getAsyncdata(){
    this.myObservable.subscribe((value:any) =>{
      // this.emptyArrayToSaveObservable.push(value)
      this.emptyArrayToSaveObservable = value
    })
  }
}


