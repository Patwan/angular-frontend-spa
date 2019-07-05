import { Component, OnInit , ViewChild, ElementRef, OnChanges} from '@angular/core';
import { SharedService } from 'src/app/Services/shared.service';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {  SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit, OnChanges {
  public userData : any[];
  public error = null;

  constructor(
  	private Shared : SharedService,
  	private Auth:AuthService,
    private router: Router,
    private Notify:SnotifyService
  	) { }

  ngOnInit() {
    this.Shared.checkAll$.subscribe(message => this.userData = message);
  }

  ngOnChanges() {
      this.Shared.updates$.subscribe(message => this.userData = message);
  }

  edit(id:number){
  	this.Auth.edit(id).subscribe(
      data => this.handleEditResponse(data),
      error => this.handleEditError(error)
    );
  }

  deleteUser(id:number){
  	return this.Auth.delete(id).subscribe(
      data => this.handleDeleteResponse(data),
      error => this.handleDeleteError(error)
    );
  }

  
  handleEditResponse(data:any){
    this.Shared.editData(data.data);
    this.router.navigateByUrl('/single-user/' + data.data.id);
    // this.AuthCheck.changeAuthStatus(true);
  }

  handleEditError(error:any){
      this.error = error.error.error;
  }

  handleDeleteResponse(data:any){
    this.userData = data.data;
    this.Notify.success(`Successfully Deleted in our records`, {timeout:4000});
  }

  handleDeleteError(error:any){
    console.log(error);
  }

}
