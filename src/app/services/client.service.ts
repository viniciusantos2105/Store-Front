import { HttpBackend, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Client } from "../models/client";
import { JwtToken } from "../models/jwtToken";
import { Login } from "../models/login";
import { Operator } from "../models/operator";

@Injectable({
    providedIn: 'root'
})
export class ClientService {

    baseUrl: String = environment.baseUrl;

    constructor(private http : HttpClient,
        private snack : MatSnackBar,
        private httpBack : HttpBackend){ }

    create(client : Client):Observable<Client>{
        this.http = new HttpClient(this.httpBack)
        const url = this.baseUrl + "/client/create";
        return this.http.post<Client>(url, client);
    }

    getClient(token: string): Observable<Client>{
        const url = this.baseUrl + "/client/getClient";
        return this.http.get<Client>(url);
    }


    token(login: Login): Observable<JwtToken>{
        this.http = new HttpClient(this.httpBack)
        const url = this.baseUrl + "/client/login"
        return this.http.post<JwtToken>(url, login)
    }

    message(msg : String): void{
        this.snack.open(`${msg}`, 'OK', {
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration: 4000
        })
    }
}