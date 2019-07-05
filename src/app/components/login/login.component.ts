import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { TokenService } from 'src/app/Services/token.service';
import { Router } from '@angular/router';
import { AuthCheckService } from 'src/app/Services/auth-check.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email: null,
    password: null
  };

  public error = null;

  constructor(
    private Auth:AuthService,
    private Token:TokenService,
    private router: Router,
    private AuthCheck : AuthCheckService
  ) { }

  onSubmit(){
    this.Auth.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data:any){
    this.AuthCheck.checkUser(data.user);
    this.Token.handle(data.access_token);
    this.router.navigateByUrl('/add-child');
    this.AuthCheck.changeAuthStatus(true);
  }

  handleError(error:any){
      this.error = error.error.error;
  }

  ngOnInit() {
  }

}
