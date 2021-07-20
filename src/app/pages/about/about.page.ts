import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  pageTitle = 'About Page';
  pageHeaderImg = '../../../assets/img/site/pageHeaders/about-mission.jpeg';
  pageHeaderImgAlt = 'About Our Mission Image';
  constructor() { }

  ngOnInit() {
  }

}
