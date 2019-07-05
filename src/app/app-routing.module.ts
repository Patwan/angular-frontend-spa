import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CreateComponent } from './components/child/create/create.component';
import { SponsorComponent } from './components/child/sponsor/sponsor.component';
import { SignupComponent } from './components/signup/signup.component';
import { ShowComponent } from './components/child/show/show.component';
import { EditComponent } from './components/child/edit/edit.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { BeforeLoginService } from './Services/before-login.service';
import { AfterLoginService } from './Services/after-login.service';


const routes: Routes = [
  {
    path: 'login' , 
    component:LoginComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'signup' , 
    component:SignupComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'add-child' , 
    component:CreateComponent ,
    canActivate: [AfterLoginService]
  },
  {
    path: 'add-sponsor' , 
    component:SponsorComponent ,
    canActivate: [AfterLoginService]
  },
  {
    path: 'show-data' , 
    component:ShowComponent  ,
    canActivate: [AfterLoginService]
  },
  {
    path: 'single-user/:id' , 
    component:EditComponent  ,
    canActivate: [AfterLoginService]
  },
  {
    path: 'request-password-reset' , 
    component:RequestResetComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'response-password-reset' , 
    component:ResponseResetComponent,
    canActivate: [BeforeLoginService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
