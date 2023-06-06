import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  temp: any;

  constructor() { }

  getTemp() {
    return this.temp;
  }

  setTemp(value: any) {
    this.temp = value;
  }
}
