import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { TokenService } from 'src/app/Services/token.service';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  
  public form = {
    childFirstName: null,
    childAge: null,
    childSurName: null,
    childGender: null
  };

  public error = null;

  constructor(
  	   private Auth:AuthService,
  	   private Token:TokenService,
       private router: Router,
       private Shared : SharedService) { }

   onSubmit(){
    this.Auth.submitChildData(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data:any){
  	//console.log(data.data);
  	this.Shared.childData(data.data);
    this.router.navigateByUrl('/add-sponsor');
  }

  handleError(error:any){
  	  //console.log(error.error.errors)
      this.error = error.error.errors;
  }

  ngOnInit() {
  }

}
