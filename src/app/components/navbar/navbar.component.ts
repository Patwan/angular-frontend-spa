import { Component, OnInit } from '@angular/core';
import { AuthCheckService } from 'src/app/Services/auth-check.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/Services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn : boolean;

  public userName : string;

  constructor(
    private AuthCheck : AuthCheckService,
    private router: Router,
    private Token: TokenService
  ) { }

  ngOnInit() {
    this.AuthCheck.authStatus.subscribe(value => this.loggedIn = value);
    this.AuthCheck.checkUser$.subscribe(message => this.userName = message);
  }

  logout(event: MouseEvent){
    event.preventDefault();
    this.Token.remove();
    this.AuthCheck.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
  }

}
