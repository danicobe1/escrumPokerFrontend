import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  idGame: number;
  idUser: number;

  players: any = [];
  game: any = {};
  constructor(private activeRoute: ActivatedRoute, private gameService: GameService, private router: Router) { }

  ngOnInit(): void {
    this.idGame = this.activeRoute.snapshot.params.idGame;
    this.idUser = this.activeRoute.snapshot.params.idUser;
    this.gameService.getTable(this.idGame).subscribe(
      (result) => {
        this.players = result;
        this.gameService.getGame(this.idGame).subscribe(
          (game) => {
            console.log(game);

            this.game = game
          }
        )
      }
    )


  }

  showValues() {
    this.gameService.getReady(this.idGame).subscribe(
      (result) => {
        console.log(result);
        this.players.forEach(element => {
          element.show = 1;
        });
      }
    );



  }

  newGame() {
    this.router.navigate(["/"]);
  }
}

