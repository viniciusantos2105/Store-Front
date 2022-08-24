import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtToken } from '../models/jwtToken';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
 
  readonly URL = 'https://store-loja.herokuapp.com';    

  public responseJwt!: JwtToken;

  public isAuthenticated(): boolean{
    return !!localStorage.getItem('token')
  }

 httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;charset=UTF-8',
        'Accept-Language': '1'
      }),
      observe: 'response'
    };

  getToken(){
    return localStorage.getItem('token')
  }
}
