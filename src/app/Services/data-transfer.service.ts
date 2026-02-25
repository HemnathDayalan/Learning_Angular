import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  constructor() { }

  private dataSubject  = new BehaviorSubject<string>('');
  data = this.dataSubject.asObservable();

  setData(data: string) {
    this.dataSubject.next(data);
  }

}
