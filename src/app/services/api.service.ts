import { ApiService } from './api.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiSelected = new EventEmitter<ApiService>();

  private api: ApiService[] = [
    new ApiService('https://api.rawg.io/api/games?dates=2010-01-01,2020-12-31&developers=4132')
  ];



  constructor() { }

}
