import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {

  @Input() rating: number;

  iconClass = {
    0: 'far fa-star',
    0.5: 'fas fa-star-half-alt',
    1: 'fas fa-star'
  }

  stars: number[] = [0, 0, 0, 0, 0];


  constructor() { }

  ngOnchanges(){
    this.fillStars();
  }

  ngOnInit(): void {
  }

 fill]stars() {

 }

}
