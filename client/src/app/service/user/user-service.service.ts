import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/class/user/user';
import { Observable } from 'rxjs';
import { Token } from 'src/app/class/token/token';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  readonly API_URL = "http://127.0.0.1:8090/api";
  readonly ENDPOINT = "";


  constructor(private http: HttpClient) {

  }

  public register(user: User) {
    (this.ENDPOINT as any) = "/register";
    return this.http.post<User>(this.API_URL + this.ENDPOINT, user);
  }

  public login(user: User) {
    (this.ENDPOINT as any) = "/auth/login";
    return this.http.post(this.API_URL + this.ENDPOINT, user);
  }

  public findAll(): Observable<User[]> {
    (this.ENDPOINT as any) = "/users";
    return this.http.get<User[]>(this.API_URL + this.ENDPOINT);
  }

  public deleteUser(id: number): Observable<any> {
    (this.ENDPOINT as any) = "/amin/users/" + id;
    return this.http.delete(this.API_URL + this.ENDPOINT);
  }

  getUserIdConnected(){
    if (!localStorage.getItem('userId')) {
      return;
    }
    return localStorage.getItem('userId');
    // (this.ENDPOINT as any) = "/auth/current_user";
    // return this.http.get<User>(this.API_URL + this.ENDPOINT);
}

}
