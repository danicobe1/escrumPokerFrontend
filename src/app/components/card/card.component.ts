import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { GameService } from 'src/app/services/game.service';
import { fromEvent, of } from 'rxjs';
import { mergeMap, delay, map } from 'rxjs/operators';
import { UserService } from 'src/app/user/user.service';
import { CardService } from 'src/app/services/card.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  game: any = {};
  username: string;
  value: number = -1;
  idGame: number;
  idUser: number;
  user: any = {};
  fibonacci = [
    { fValue: 0 },
    { fValue: 1 },
    { fValue: 2 },
    { fValue: 3 },
    { fValue: 5 },
    { fValue: 8 },
    { fValue: 13 },
    { fValue: 21 },
    { fValue: 34 },
    { fValue: 55 },
    { fValue: 89 },
  ]
  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private userService: UserService,
    private cardService: CardService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.idGame = this.route.snapshot.params.idGame;
    this.idUser = this.route.snapshot.params.idUser;
    if (this.idUser) {
      this.userService.getUser(this.idUser).subscribe(
        (result) => {
          this.user = result
        }
      )
    }

    this.gameService.getGame(this.idGame).subscribe(
      (result) => {
        this.game = result;
      },
      (error) => {
        console.log(error);
        this.router.navigate(['error']);
      }
    )
  }

  createCard() {
    let user = {
      username: this.username,
      idGame: this.idGame,
    }
    if (!this.idUser) {
      this.userService.createUser(user).subscribe(
        (result: any) => {
          let card = {
            idUser: result.idUser,
            value: this.value,
            idGame: this.idGame,
          }
          this.cardService.createCard(card).subscribe(
            (result2) => {
              this.router.navigate(['table', this.idGame, result.idUser]);
            }
          )
        }
      );
    } else {
      let card = {
        idUser: this.idUser,
        value: this.value,
        idGame: this.idGame,
      }
      this.cardService.createCard(card).subscribe(
        (result2) => {
          this.router.navigate(['table', this.idGame, this.idUser]);
        }
      )
    }

  }

}

