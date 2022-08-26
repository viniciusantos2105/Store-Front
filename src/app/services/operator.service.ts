import { HttpBackend, HttpClient, HttpHeaders, HttpRequest } from "@angular/common/http";
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
        private auth: AuthService,
        private httpBack : HttpBackend) { }

    create(operator: Operator): Observable<Operator> {
        //usei o httpBackend para a rota ser ignorada pelo interceptador
        this.http = new HttpClient(this.httpBack)
        const url = this.baseUrl + "/operator/create";
        return this.http.post<Operator>(url, operator);
    }

    token(login: Login): Observable<JwtToken>{
        this.http = new HttpClient(this.httpBack)
        const url = this.baseUrl + "/operator/login"
        return this.http.post<JwtToken>(url, login)
    }

    message(msg: String): void {
        this.snack.open(`${msg}`, 'OK', {
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration: 4000
        })
    }

    getOperator(username: string): Observable<Operator>{
        const url = this.baseUrl + "/operator/getOperator";
        return this.http.post<Operator>(url, username);
    }

    findAll(): Observable<Operator[]>{
        const url = this.baseUrl + "/operator/findOperators";
        return this.http.get<Operator[]>(url);
    }

    updateResponsibility(operator: Operator): Observable<Operator>{
        const url = this.baseUrl + "/operator/updateResponsibility";
        return this.http.patch<Operator>(url, operator);
    }

    deleteOperator(id: any): Observable<void>{
        const url = this.baseUrl + `/operator/delete${id}`;
        return this.http.delete<void>(url)
    }
}