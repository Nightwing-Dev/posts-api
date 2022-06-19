import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiJsonService {

  constructor(private http: HttpClient) { }

  getPost() {
    return this.http.get<any>("https://jsonplaceholder.typicode.com/posts");
  }
  putPost(data: any, id: number) {
    return this.http.put<any>("https://jsonplaceholder.typicode.com/posts/1" + id, data);
  }
  patchPost(){
    
  }
}
