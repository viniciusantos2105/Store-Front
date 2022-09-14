import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtToken } from '../models/jwtToken';
import { Login } from '../models/login';
import { Operator } from '../models/operator';

@Injectable({
  providedIn: 'root'
})
export class AuthService{ 

  constructor(private http: HttpClient) { }

  public responseJwt!: JwtToken;

  public username: String = '';

  operator: Operator = {
    id: '',
    username: '',
    password: '',
    responsibility: ''
  }

  public isAuthenticated(): boolean{
    return !!localStorage.getItem('token')
  }

  public isOperator(): boolean{
    return !!localStorage.getItem('responsibility')
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

  getUsername(){
    return localStorage.getItem('username')
  }
}
