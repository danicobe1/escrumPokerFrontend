import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { ErrorComponent } from './components/error/error.component';
import { GameComponent } from './components/game/game.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  { path: '', component: GameComponent },
  { path: 'card/:idGame', component: CardComponent },
  { path: 'card/:idGame/:idUser', component: CardComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'table/:idGame/:idUser', component: TableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
