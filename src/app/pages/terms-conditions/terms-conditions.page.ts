import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.page.html',
  styleUrls: ['./terms-conditions.page.scss'],
})
export class TermsConditionsPage implements OnInit {

  pageTitle = 'Terms & Conditions Page';
  pageHeaderImg = '../../../assets/img/site/pageHeaders/terms.jpg';
  pageHeaderImgAlt = 'Terms & Conditions Image';
  constructor() { }

  ngOnInit() {
  }

}
