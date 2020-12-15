import { ApiService } from './services/api.service';
import { Component, OnInit, Input } from '@angular/core';
import { ApiResponse, Game } from './models/test.model';


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
  this.apiService.getData().subscribe((resp: ApiResponse) => {
  this.games = resp.results;
  console.log(this.games);
  });
}

}

