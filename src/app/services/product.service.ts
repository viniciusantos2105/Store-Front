import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';
import { ProductDTO } from '../models/productDTO';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: String = environment.baseUrl;

  
  constructor(private http : HttpClient,
    private snack: MatSnackBar,
    private auth: AuthService,
    private httpBack : HttpBackend) { }

  message(msg: String): void {
    this.snack.open(`${msg}`, 'OK', {
        horizontalPosition: 'end',
        verticalPosition: 'top',
        duration: 4000
    })
}

  findAll():Observable<Product[]>{
    this.http = new HttpClient(this.httpBack)
    const url = this.baseUrl + "/product/allProducts"
    return this.http.get<Product[]>(url);
  }

  findById(id: any):Observable<Product>{
    this.http = new HttpClient(this.httpBack)
    const url = `${this.baseUrl}/product/findByProductId${id}`
    return this.http.get<Product>(url);
  }

  findFilter(filter: ProductDTO):Observable<Product[]>{
    const url = this.baseUrl + "/product/findFilter"
    return this.http.post<Product[]>(url, filter);
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
