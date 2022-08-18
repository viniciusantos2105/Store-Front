import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Operator } from "../models/operator";

@Injectable({
    providedIn: 'root'
  })
export class OperatorService {

    baseUrl: String = environment.baseUrl;

    constructor(private http : HttpClient,
        private snack : MatSnackBar){ }

    create(operator : Operator):Observable<Operator>{
        const url = this.baseUrl + "/operator/create";
        return this.http.post<Operator>(url, operator);
    }

    message(msg : String): void{
        this.snack.open(`${msg}`, 'OK', {
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration: 4000
        })
    }
}