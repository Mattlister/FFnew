import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Final Fantasy Heroes';

posts: any = '';

constructor(private http: HttpClient) {
}

getPosts() {
  this.posts = this.http.get().subscribe(res => {
    this.posts = res;
    console.log(res);
  });
}
}

