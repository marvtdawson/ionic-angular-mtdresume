import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  // customerSatisfactionImage = '';
  public departments = [
    {
      thumbnailImg: true,
      linkPath: '/allergy',
      linkImage: '../../assets/img/site/med_categories/allergies2.jpg',
      linkText: 'Allergy and Immunology'
    },
    {
      thumbnailImg: true,
      linkPath: '/alternative-medicine',
      linkImage: '../../assets/img/site/med_categories/alternative_med.jpg',
      linkText: 'Alternative Medicine'
    },
    {
      thumbnailImg: true,
      linkPath: '/anesthesiology',
      linkImage: '../../assets/img/site/med_categories/anesthesiology.jpeg',
      linkText: 'Anesthesiology'
    },
    {
      thumbnailImg: true,
      linkPath: '/digestive',
      linkImage: '../../assets/img/site/med_categories/digestive.jpg',
      linkText: 'Colon and Rectal Surgery'
    },
    {
      thumbnailImg: true,
      linkPath: '/dental',
      linkImage: './assets/img/site/med_categories/dental.jpg',
      linkText: 'Dental'
    },
    {
      thumbnailImg: true,
      linkPath: '/dermatology',
      linkImage: '../../assets/img/site/med_categories/dermatology.jpeg',
      linkText: 'Dermatology'
    },
    {
      thumbnailImg: true,
      linkPath: '/dietitian',
      linkImage: '../../assets/img/site/med_categories/dietary2.jpg',
      linkText: 'Dietitian'
    },
    {
      thumbnailImg: true,
      linkPath: '/emergency-medicine',
      linkImage: '../../assets/img/site/med_categories/emergency2.jpg',
      linkText: 'Emergency Medicine'
    },
    {
      thumbnailImg: true,
      linkPath: '/family-medicine',
      linkImage: '../../assets/img/site/med_categories/family_med.jpg',
      linkText: 'Family Medicine'
    },
    {
      thumbnailImg: true,
      linkPath: '/internal-medicine',
      linkImage: '../../assets/img/site/med_categories/internal_med.jpg',
      linkText: 'Internal Medicine'
    },
    {
      thumbnailImg: true,
      linkPath: '/medical-facilitation',
      linkImage: '../../assets/img/site/med_categories/med_facilitation.jpg',
      linkText: 'Medical Facilitation'
    },
    {
      thumbnailImg: true,
      linkPath: '/genetics',
      linkImage: '../../assets/img/site/med_categories/genetics.jpg',
      linkText: 'Genetics and Genomics'
    }
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  openRegisterModal() {
    this.router.navigate(['/register'])
      .then()
      .catch();
  }

}
