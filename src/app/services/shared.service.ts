import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  roles:any= null;

  constructor() {
    this.roles = localStorage.getItem('roles');
   }

  getRoles() {
    console.log('Roles:', this.roles);
    return this.roles;
  }

  setRoles(value: any) {
    this.roles= value;
    localStorage.setItem('roles', value);
  }

}


