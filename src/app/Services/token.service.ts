import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TokenService {

  private iss = {
    login : 'http://localhost/Laravel-anngular-spa/backend/public/api/login',
    signup : 'http://localhost/Laravel-anngular-spa/backend/public/api/signup'
  };

  constructor() { }

  handle(token:any){
    this.set(token);
  }

  set(token:any){
    localStorage.setItem('token' , token);
  }

  get(){
    return localStorage.getItem('token');
  }

  remove(){
    return localStorage.removeItem('token');
  }

  isValid(){
    const token = this.get();
    if(token){
      const payload = this.payload(token);
      if(payload){
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    } 
    return false;
  }

  payload(token){
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload){
    return JSON.parse(atob(payload));
  }

  loggedIn(){
    return this.isValid();
  }
}
