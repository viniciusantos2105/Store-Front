import { HttpBackend, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Client } from "../models/client";
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

    login(login: Login): Observable<Login>{
        const url = this.baseUrl + "/client/login"
        return this.http.post<Operator>(url, login)
    }

    message(msg : String): void{
        this.snack.open(`${msg}`, 'OK', {
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration: 4000
        })
    }
}