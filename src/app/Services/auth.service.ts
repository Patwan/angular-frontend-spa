import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private httpOptions = {
      headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': this.Token.get()
      })
  };
  
  private baseUrl = 'http://localhost/Laravel-anngular-spa/backend/public/api';

  constructor(
    private http:HttpClient,
    private Token : TokenService
    ) 
  {}

  signup(data:any){
    return this.http.post(`${this.baseUrl}/signup` , data);
  }

  login(data:any){
    return this.http.post(`${this.baseUrl}/login` , data);
  }

  edit(id:number){
    return this.http.put(`${this.baseUrl}/edit/${id}`, this.httpOptions);
  }

  delete(id:number){
    return this.http.delete(`${this.baseUrl}/deleteUser/${id}`, this.httpOptions);
  }

  editedData(data:any){
    return this.http.post(`${this.baseUrl}/upDatedData`, data);
  }

  sendPasswordResetLink(data:any){
    return this.http.post(`${this.baseUrl}/sendPasswordResetLink` , data);
  }

  changePassword(data:any){
    return this.http.post(`${this.baseUrl}/resetPassword` , data);     
  }

  submitChildData(data:any){
    return this.http.post(`${this.baseUrl}/submitChildData` , data);     
  }

  submitSponsorData(data:any){
    return this.http.post(`${this.baseUrl}/submitSponsorData` , data);     
  }
}
