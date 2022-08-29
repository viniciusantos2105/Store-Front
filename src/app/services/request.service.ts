import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RequestDTO } from '../models/requestDTO';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  baseUrl: String = environment.baseUrl;

  constructor(private http : HttpClient,
    private snack: MatSnackBar) { }

  message(msg: String): void {
    this.snack.open(`${msg}`, 'OK', {
        horizontalPosition: 'end',
        verticalPosition: 'top',
        duration: 4000
    })
  }

  sale(requestDTO: RequestDTO): Observable<Request>{
    const url = this.baseUrl + "/requests/sale"
    return this.http.post<Request>(url, requestDTO);
  }
}
