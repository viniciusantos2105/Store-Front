import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: String = environment.baseUrl;

  
  constructor(private http : HttpClient,
    private snack: MatSnackBar,
    private auth: AuthService) { }

  message(msg: String): void {
    this.snack.open(`${msg}`, 'OK', {
        horizontalPosition: 'end',
        verticalPosition: 'top',
        duration: 4000
    })
}

  findAll():Observable<Product[]>{
    const url = this.baseUrl + "/product/allProducts"
    return this.http.get<Product[]>(url);
  }

  findFilter(msg: String):Observable<Product[]>{
    const url = this.baseUrl + "/product/findFilter"
    return this.http.get<Product[]>(url);
  }

  create(product: Product):Observable<Product>{
    const url = this.baseUrl + "/product/create";
    return this.http.post<Product>(url, product);
  }

  updateQuantity(product: Product): Observable<Product>{
    const url = this.baseUrl + "/product/addStock";
    return this.http.patch<Product>(url, product)
  }

  updatePrice(product: Product): Observable<Product>{
    const url = this.baseUrl + "/product/attPrice"
    return this.http.post<Product>(url, product)
  }
}
