import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { TokenService } from 'src/app/Services/token.service';
import { SnotifyService } from 'ng-snotify';
import { AuthCheckService } from 'src/app/Services/auth-check.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form = {
    email: null,
    name: null,
    password: null,
    password_confirmation: null
  };

  public error = [];

  constructor(
    private Auth:AuthService,
    private Token:TokenService,
    private router: Router,
    private notify: SnotifyService,
    private AuthCheck : AuthCheckService) { }

  
  onSubmit(){
    this.Auth.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data){
    this.AuthCheck.checkUser(data.user);
    this.Token.handle(data.access_token);
    this.router.navigateByUrl('/add-child');
    this.AuthCheck.changeAuthStatus(true);
  }

  handleError(error:any){
    this.error = error.error.errors;
  }

  ngOnInit() {
  }

}
