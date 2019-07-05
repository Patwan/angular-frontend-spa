import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {

  public form = {
    email : null
  }

  constructor(
    private Auth: AuthService,
    private notify: SnotifyService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.notify.info('Please wait...' , {timeout:5000})
    this.Auth.sendPasswordResetLink(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.notify.error(error.error.error)
    )
  }

  handleResponse(res:any){
    this.notify.success(res.data, {timeout:0});
    this.form.email = null;
  }

}
