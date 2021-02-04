import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(user) {
    return this.http.post('http://localhost:3000/user/', user);
  }
  getUser(idUser) {
    return this.http.get(`http://localhost:3000/user/${idUser}`);
  }
}
