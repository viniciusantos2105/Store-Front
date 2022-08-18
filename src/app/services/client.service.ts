import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Client } from "../models/client";

@Injectable({
    providedIn: 'root'
})
export class ClientService {

    baseUrl: String = environment.baseUrl;

    constructor(private http : HttpClient,
        private snack : MatSnackBar){ }

    create(client : Client):Observable<Client>{
        const url = this.baseUrl + "/client/create";
        return this.http.post<Client>(url, client);
    }

    message(msg : String): void{
        this.snack.open(`${msg}`, 'OK', {
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration: 4000
        })
    }
}