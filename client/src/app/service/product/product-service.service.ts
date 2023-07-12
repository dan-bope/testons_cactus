import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from 'src/app/class/product/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  readonly API_URL = "http://127.0.0.1:8090/api/products";
  readonly ENDPOINT = "";

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Product[]> {
    (this.ENDPOINT as any) = "";
    return this.http.get<Product[]>(this.API_URL + this.ENDPOINT);
  }

  public findProductById(id: string): Observable<Product> {
    (this.ENDPOINT as any) = "/" + id;
    return this.http.get<Product>(this.API_URL + this.ENDPOINT);
  }

}
