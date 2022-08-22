import { Injectable } from '@angular/core';
import { JwtToken } from '../models/jwtToken';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public responseJwt!: JwtToken;

  public isAuthenticated(): boolean{
    return Boolean(this.responseJwt?.token)
  }
}
