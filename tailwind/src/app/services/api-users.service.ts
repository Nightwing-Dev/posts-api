import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiUsersService {

  constructor(private http: HttpClient) { }

  getUsers(){
    this.http.get<any>("https://jsonplaceholder.typicode.com/users");
  }
}
