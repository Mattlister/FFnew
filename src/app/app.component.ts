import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Final Fantasy Heroes';

posts: any = '';

constructor(private http: HttpClient) {
}

getPosts() {
  this.posts = this.http.get('https://api.rawg.io/api/games?dates=2010-01-01,2020-12-31&developers=4132').subscribe(res => {
    this.posts = res;
    console.log(res);
  });
}
}

@Component({
  selector: 'app-root',
  template: `
    <h1>Tour of Heroes</h1>
  `,
  styles: ['h1 { font-weight: normal; }']
})
export class HeroAppComponent {
}
