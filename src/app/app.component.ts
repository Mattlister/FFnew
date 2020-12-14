import { GameResult } from './models/games.model';
import { Game } from '/Users/matthewlister/Desktop/FFNew/FFnew/src/app/models/games.model';
import { ApiService } from './services/api.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  title = 'Final Fantasy Heroes';
  games: Game[] = [];

constructor(private apiService: ApiService) {
  this.getGames();
}

getGames(): void {
  this.apiService.getData().subscribe((resp: GameResult) => {
  this.games = resp.results;
  });
}

}

