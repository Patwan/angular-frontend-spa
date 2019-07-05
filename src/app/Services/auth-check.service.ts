import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthCheckService {

	//Check logged in userName
	private userName = new BehaviorSubject;
 	checkUser$ = this.userName.asObservable();


  	private loggedIn = new BehaviorSubject <boolean> (this.Token.loggedIn());
  	authStatus = this.loggedIn.asObservable();

	changeAuthStatus(value : boolean){
	    this.loggedIn.next(value)
	  }

	  checkUser(data: any){
	     this.userName.next(data);
	  }

	  constructor(private Token : TokenService) { }
}
