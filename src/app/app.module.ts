import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { CreateComponent } from './components/child/create/create.component';
import { AuthCheckService } from './Services/auth-check.service';
import { AuthService } from './Services/auth.service';
import { TokenService } from './Services/token.service';
import { SharedService } from './Services/shared.service';
import { AfterLoginService } from './Services/after-login.service';
import { BeforeLoginService } from './Services/before-login.service';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { ShowComponent } from './components/child/show/show.component';
import { EditComponent } from './components/child/edit/edit.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SponsorComponent } from './components/child/sponsor/sponsor.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    RequestResetComponent,
    ResponseResetComponent,
    CreateComponent,
    ShowComponent,
    EditComponent,
    SidebarComponent,
    SponsorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SnotifyModule
  ],
  providers: [
    AuthService,
    AuthCheckService,
    TokenService,
    AfterLoginService,
    BeforeLoginService,
    SharedService,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
