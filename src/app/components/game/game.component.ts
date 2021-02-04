import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CardComponent } from '../card/card.component';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  game = {
    nameGame: '',
    limitPlayers: 10,
    task: '',
    password: '',
    idUser: 0
  };

  username: string;

  idGame: number;
  constructor(private gameService: GameService, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  createGame() {
    this.userService.createUser(
      { username: this.username }
    ).subscribe((result: any) => {

      this.game.idUser = result.idUser;

      this.gameService.createGame(this.game).subscribe(
        (result: any) => {
          console.log(result);
          console.log(result.idGame);


          this.router.navigate(['card', result.idGame, this.game.idUser]);
        },
        (error) => {
          this.router.navigate(['error']);
        }

      )
    })


  }
  joinGame() {

    this.router.navigate(['card', this.idGame]);

  }


}
