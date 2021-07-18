import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-physicians',
  templateUrl: './physicians.page.html',
  styleUrls: ['./physicians.page.scss'],
})
export class PhysiciansPage implements OnInit {

  pageTitle = 'Physicians';
  public doctors = [
    {
      thumbnailImg: true,
      joinDate: '03/17/2021',
      doctorCategory: 'Cosmetics',
      doctorName: 'Juan Doe',
      doctorCountry: 'Mexico',
      linkPath: '/categories/allergies',
      linkImage: '../../assets/img/site/med_categories/allergies2.jpg',
      doctorAOP: 'Allergy and Immunology',
      doctorRating: '90%'
    },
    {
      thumbnailImg: true,
      linkPath: '/categories/alternative-medicine',
      linkImage: '../../assets/img/site/med_categories/alternative_med.jpg',
      linkText: 'Alternative Medicine'
    },
    {
      thumbnailImg: true,
      linkPath: '/categories/anesthesiology',
      linkImage: '../../assets/img/site/med_categories/anesthesiology.jpeg',
      linkText: 'Anesthesiology'
    },
    {
      thumbnailImg: true,
      linkPath: '/categories/digestive',
      linkImage: '../../assets/img/site/med_categories/digestive.jpg',
      linkText: 'Colon and Rectal Surgery'
    },
    {
      thumbnailImg: true,
      linkPath: '/categories/dental',
      linkImage: './assets/img/site/med_categories/dental2.jpg',
      linkText: 'Dental'
    },
    {
      thumbnailImg: true,
      linkPath: '/categories/dermatology',
      linkImage: '../../assets/img/site/med_categories/dermatology.jpeg',
      linkText: 'Dermatology'
    },
    {
      thumbnailImg: true,
      linkPath: '/categories/dietitian',
      linkImage: '../../assets/img/site/med_categories/dietary2.jpg',
      linkText: 'Dietitian'
    },
    {
      thumbnailImg: true,
      linkPath: '/categories/emergency-medicine',
      linkImage: '../../assets/img/site/med_categories/emergency2.jpg',
      linkText: 'Emergency Medicine'
    },
    {
      thumbnailImg: true,
      linkPath: '/categories/family-medicine',
      linkImage: '../../assets/img/site/med_categories/family_med.jpg',
      linkText: 'Family Medicine'
    },
    {
      thumbnailImg: true,
      linkPath: '/categories/internal-medicine',
      linkImage: '../../assets/img/site/med_categories/internal_med.jpg',
      linkText: 'Internal Medicine'
    },
    {
      thumbnailImg: true,
      linkPath: '/categories/medical-facilitation',
      linkImage: '../../assets/img/site/med_categories/med_facilitation.jpg',
      linkText: 'Medical Facilitation'
    },
    {
      thumbnailImg: true,
      linkPath: '/categories/genetics',
      linkImage: '../../assets/img/site/med_categories/genetics2.jpg',
      linkText: 'Genetics and Genomics'
    },
    {
      thumbnailImg: true,
      linkPath: '/categories/cosmetics',
      linkImage: '../../../assets/img/site/doctors/doctor2.jpeg',
      linkText: 'Cosmetic'
    },
    {
      thumbnailImg: true,
      linkPath: '/categories/pharmaceutical',
      linkImage: '../../assets/img/site/med_categories/pharmaceutical.jpg',
      linkText: 'Pharmaceutical'
    },
    {
      thumbnailImg: true,
      linkPath: '/categories/ophthalmology',
      linkImage: '../../assets/img/site/med_categories/ophthalmology.jpg',
      linkText: 'Ophthalmology'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
