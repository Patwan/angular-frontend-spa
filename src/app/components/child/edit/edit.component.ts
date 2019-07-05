import { Component, OnInit} from '@angular/core';
import { SharedService } from 'src/app/Services/shared.service';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import {  SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{

  public singleUser : any[];
  public error = null;

  constructor(
  	private Shared : SharedService,
    private Auth:AuthService,
    private router: Router,
    private Notify:SnotifyService
  ) { }

  ngOnInit() {
     this.Shared.edit$.subscribe(message => this.singleUser = message); 
  }

  onSubmit(formValue:any) {
    const data = {
      id: formValue.value.userId,
      UserName: formValue.value.childName,
      Age: formValue.value.childAge,
      Gender: formValue.value.childGender,
    };

    return this.Auth
      .editedData(data)
      .subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
      );
  }

  handleResponse(data : any){
    this.Notify.success(`Record successfully updated in our records`, {timeout:4000});
    this.Shared.updatedData(data.data);
    this.router.navigateByUrl('/show-data');
  }

  handleError(error :any){
    console.log(error);
  }

}
