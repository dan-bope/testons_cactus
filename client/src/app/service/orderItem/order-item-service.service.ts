
import { User } from 'src/app/class/user/user';
import { OrderItem } from 'src/app/class/orderItem/orderItem';


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from 'src/app/class/product/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderItemServiceService {

  readonly API_URL = "http://127.0.0.1:8090/api/orderItem";
  readonly ENDPOINT = "";

  constructor(private http: HttpClient) { }

  public addOrderItem(userId : number, productId : number): Observable<User>{
    (this.ENDPOINT as any) = "/" + userId + "/add" + "/" + productId;
    return this.http.post<User>(this.API_URL + this.ENDPOINT, {});
  }

  public getOrderItem(userId : number, productId : number): Observable<OrderItem>{
    (this.ENDPOINT as any) = "/" + userId + "/" + productId;
    return this.http.get<OrderItem>(this.API_URL + this.ENDPOINT);
  }

  public getUserOrderItem(userId : number): Observable<OrderItem[]>{
    (this.ENDPOINT as any) = "/users/" + userId;
    return this.http.get<OrderItem[]>(this.API_URL + this.ENDPOINT);
  }
}
