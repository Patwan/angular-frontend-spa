import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import {  SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-response-reset',
  templateUrl: './response-reset.component.html',
  styleUrls: ['./response-reset.component.css']
})
export class ResponseResetComponent implements OnInit {

  public error = [];

  public form = {
    email : null,
    password: null,
    password_confirmation : null,
    resetToken: null
  };

  constructor(
    private route : ActivatedRoute,
    private router:Router,
    private Auth : AuthService,
    private Notify:SnotifyService) { 
    route.queryParams.subscribe(params => {
      this.form.resetToken = params['token'];
    })
  }

  onSubmit(){
    this.Auth.changePassword(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data:any){
    let _router = this.router;
    this.Notify.confirm('Done!, Please login with a new Password', {
      buttons:[
        {text: 'Okay', 
        action: toster =>{
           _router.navigate(['/login']),
           this.Notify.remove(toster.id)
          }
      },
      ]
    }); 
  }

  handleError(error:any){
    this.error = error.error.errors;
  }

  ngOnInit() {
  }

}
