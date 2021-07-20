import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.page.html',
  styleUrls: ['./reviews.page.scss'],
})
export class ReviewsPage implements OnInit {

  pageTitle = 'Recent Reviews';
  pageHeaderImg = '../../../assets/img/site/pageHeaders/reviews.jpg';
  pageHeaderImgAlt = 'Review It Image';
  constructor() { }

  ngOnInit() {
  }

}
