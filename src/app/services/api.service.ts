import { GameResult } from './../models/games.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/test.model';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiService = new EventEmitter<ApiService>();


  constructor(
    private http: HttpClient
  ) { }

  getData(): Observable<any> {
    return this.http.get('https://api.rawg.io/api/games?dates=2010-01-01,2020-12-31&developers=4132');
    console.log();

  }


}
