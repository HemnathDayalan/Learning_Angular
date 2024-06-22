import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  constructor() { }

  // dataTransfer = new EventEmitter<string>();
  dataTransfer = new Subject<string>();

  raisedatatransfer(data:string){
    this.dataTransfer.next(data);
  }

}
