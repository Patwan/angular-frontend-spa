import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { TokenService } from 'src/app/Services/token.service';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/Services/shared.service';
import {  SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.css']
})
export class SponsorComponent implements OnInit {
  public allChildren: any[];
  public form = {
    sponsorFirstName: null,
    sponsorSurName: null,
    sponsorEmail: null,
    sponsorPhone: null,
    sponsoredChild : null,
    nationality: null
  };

  public error = null;

  constructor(
    private Auth:AuthService,
       private router: Router,
       private Shared : SharedService,
       private Notify:SnotifyService
  ) { }

  onSubmit(){
    this.Auth.submitSponsorData(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data:any){
    this.Notify.success(`Sponsor and children successfully saved in our records`, {timeout:2000});
    this.router.navigateByUrl('/show-data');
  }

  handleError(error:any){
      console.log(error.error.errors)
      this.Notify.info('A sponsor with a similar email already exists in our records' , {timeout:7000});
      this.error = error.error.errors;
  }

  ngOnInit() {
    this.Shared.checkAll$.subscribe(message => this.allChildren = message);
  }

}
