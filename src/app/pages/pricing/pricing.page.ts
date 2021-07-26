import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.page.html',
  styleUrls: ['./pricing.page.scss'],
})
export class PricingPage implements OnInit {

  pageTitle = 'Pricing';
  pageHeaderImg = '../../../assets/img/site/pageHeaders/membership.jpg';
  pageHeaderImgAlt = 'Membership Image';

  cardOneImg = '../../assets/img/site/pricing/silver.jpg';
  cardTwoImg = '../../assets/img/site/pricing/bronze.jpg';
  cardThreeImg = '../../assets/img/site/pricing/gold.jpg';
  cardFourImg = '../../assets/img/site/pricing/titanium.jpg';

  constructor() { }

  ngOnInit() {
  }

}
