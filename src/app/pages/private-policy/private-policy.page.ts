import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-private-policy',
  templateUrl: './private-policy.page.html',
  styleUrls: ['./private-policy.page.scss'],
})
export class PrivatePolicyPage implements OnInit {

  pageTitle = 'Private Policy Page';
  pageHeaderImg = '../../../assets/img/site/pageHeaders/privacy.jpg';
  pageHeaderImgAlt = 'Privacy Image';
  constructor() { }

  ngOnInit() {
  }

}
