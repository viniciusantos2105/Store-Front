import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { JwtToken } from "../models/jwtToken";
import { Login } from "../models/login";
import { Operator } from "../models/operator";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class OperatorService {

    baseUrl: String = environment.baseUrl;

    constructor(private http: HttpClient,
        private snack: MatSnackBar,
        private auth: AuthService) { }

    create(operator: Operator): Observable<Operator> {
        const url = this.baseUrl + "/operator/create";
        return this.http.post<Operator>(url, operator);
    }

    token(login: Login): Observable<JwtToken>{
        const url = this.baseUrl + "/operator/login"
        return this.http.post<JwtToken>(url, login)
        .pipe(
            tap((responseJwt) => this.auth.responseJwt = responseJwt))
    }

    message(msg: String): void {
        this.snack.open(`${msg}`, 'OK', {
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration: 4000
        })
    }

    getOperator(username: String): Observable<Operator>{
        const url = this.baseUrl + "/operator/getOperator";
        return this.http.post<Operator>(url, username);
    }
}