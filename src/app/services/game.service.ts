import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) {
  }

  createGame(game) {
    return this.http.post(`http://localhost:3000/game`, game);
  }

  getGame(id) {
    return this.http.get(`http://localhost:3000/game/${id}`);
  }

  getTable(id) {
    return this.http.get(`http://localhost:3000/game/${id}/getPlayers/`);
  }

  getReady(id){
    return this.http.get(`http://localhost:3000/game/${id}/getReady`);
  }
}
