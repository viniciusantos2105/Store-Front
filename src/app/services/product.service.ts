import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: String = environment.baseUrl;

  constructor(private http : HttpClient) { }

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

}
