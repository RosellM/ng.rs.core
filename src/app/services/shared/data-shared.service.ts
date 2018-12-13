import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataSharedService {

  private messageSource = new BehaviorSubject({ titleName: 'Dashboard', subTitle: 'Listado de negocios' });
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: any) {
    this.messageSource.next(message)
  }
}