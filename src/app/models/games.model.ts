import { Title } from '@angular/platform-browser';

export interface Game {
name: string;
background_image: string;
platforms: Platform;
released: string;
genres: Genre[];
rating: number;
card: string;
text: string;
}

export interface Platform {
  id: number;
  name: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface GameResult {
  count: number;
  results: Game[];
}
