import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.page.html',
  styleUrls: ['./reviews.page.scss'],
})
export class ReviewsPage implements OnInit {

  pageTitle = 'Recent Reviews';
  pageHeaderImg = '../../../assets/img/site/pageHeaders/reviews.jpg';
  pageHeaderImgAlt = 'What People Are Saying!';
  public doctors = [
    {
      thumbnailImg: true,
      joinDate: '03/17/2021',
      doctorCategory: 'Allergy and Immunology',
      doctorName: 'Juan Doe',
      doctorCountry: 'Mexico',
      linkPath: '/categories/allergies',
      linkImage: '../../assets/img/site/med_categories/allergies2.jpg',
      doctorAOP: 'Allergy and Immunology',
      doctorRating: '90%'
    },
    {
      thumbnailImg: true,
      joinDate: '08/09/2021',
      doctorCategory: 'Alternative Medicine',
      doctorName: 'Juan Dominguez',
      doctorCountry: 'Cuba',
      linkPath: '/categories/alternative-medicine',
      linkImage: '../../assets/img/site/med_categories/allergies2.jpg',
      doctorAOP: 'Alternative Medicine',
      doctorRating: '85%'
    },
    {
      thumbnailImg: true,
      joinDate: '03/07/2021',
      doctorCategory: 'Anesthesiology',
      doctorName: 'Juan Dontalio',
      doctorCountry: 'Puerto Rico',
      linkPath: '/categories/anesthesiology',
      linkImage: '../../assets/img/site/med_categories/allergies2.jpg',
      doctorAOP: 'Anesthesiology',
      doctorRating: '87%'
    },
    {
      thumbnailImg: true,
      joinDate: '02/13/2021',
      doctorCategory: 'Colon and Rectal Surgery',
      doctorName: 'Pablo Davis',
      doctorCountry: 'San Lucas',
      linkPath: '/categories/digestive',
      linkImage: '../../assets/img/site/med_categories/allergies2.jpg',
      doctorAOP: 'Colon and Rectal Surgery',
      doctorRating: '89%'
    },
    {
      thumbnailImg: true,
      joinDate: '04/11/2021',
      doctorCategory: 'Cosmetics',
      doctorName: 'Jesus Doe',
      doctorCountry: 'Mexico',
      linkPath: '/categories/cosmetics',
      linkImage: '../../assets/img/site/med_categories/allergies2.jpg',
      doctorAOP: 'Cosmetics',
      doctorRating: '90%'
    },
    {
      thumbnailImg: true,
      joinDate: '01/10/2021',
      doctorCategory: 'Dental',
      doctorName: 'Juan Dominique',
      doctorCountry: 'Mexico',
      linkPath: '/categories/dental',
      linkImage: '../../assets/img/site/med_categories/allergies2.jpg',
      doctorAOP: 'Dental',
      doctorRating: '90%'
    },
    {
      thumbnailImg: true,
      joinDate: '12/03/2020',
      doctorCategory: 'Dermatology',
      doctorName: 'Chuck Davids',
      doctorCountry: 'Mexico City',
      linkPath: '/categories/dermatology',
      linkImage: '../../assets/img/site/med_categories/allergies2.jpg',
      doctorAOP: 'Dermatology',
      doctorRating: '90%'
    },
    {
      thumbnailImg: true,
      joinDate: '07/06/2020',
      doctorCategory: 'Dietitian',
      doctorName: 'Scott Downs',
      doctorCountry: 'Mexico',
      linkPath: '/categories/dietitian',
      linkImage: '../../assets/img/site/med_categories/allergies2.jpg',
      doctorAOP: 'Dietitian',
      doctorRating: '82%'
    },
    {
      thumbnailImg: true,
      joinDate: '10/25/2020',
      doctorCategory: 'Emergency Medicine',
      doctorName: 'Paul Donaldson',
      doctorCountry: 'United States',
      linkPath: '/categories/emergency-medicine',
      linkImage: '../../assets/img/site/med_categories/allergies2.jpg',
      doctorAOP: 'Emergency Medicine',
      doctorRating: '79%'
    },
    {
      thumbnailImg: true,
      joinDate: '08/14/2020',
      doctorCategory: 'Family Medicine',
      doctorName: 'Donna Davidson',
      doctorCountry: 'Mexico',
      linkPath: '/categories/family-medicine',
      linkImage: '../../assets/img/site/med_categories/allergies2.jpg',
      doctorAOP: 'Family Medicine',
      doctorRating: '90%'
    },
    {
      thumbnailImg: true,
      joinDate: '07/09/2020',
      doctorCategory: 'Genetics and Genomics',
      doctorName: 'Jill Dapherson',
      doctorCountry: 'United States',
      linkPath: '/categories/genetics',
      linkImage: '../../assets/img/site/med_categories/allergies2.jpg',
      doctorAOP: 'Genetics and Genomics',
      doctorRating: '90%'
    },
    {
      thumbnailImg: true,
      joinDate: '06/24/2020',
      doctorCategory: 'Medical Facilitation',
      doctorName: 'Amy Donnic',
      doctorCountry: 'Soviet Union',
      linkPath: '/categories/medical-facilitation',
      linkImage: '../../assets/img/site/med_categories/allergies2.jpg',
      doctorAOP: 'Medical Facilitation',
      doctorRating: '86%'
    },
    {
      thumbnailImg: true,
      joinDate: '03/01/2019',
      doctorCategory: 'Pharmaceutical',
      doctorName: 'Paula Scotto',
      doctorCountry: 'United States',
      linkPath: '/categories/allergies',
      linkImage: '../../assets/img/site/med_categories/allergies2.jpg',
      doctorAOP: 'Pharmaceutical',
      doctorRating: '90%'
    },
    {
      thumbnailImg: true,
      joinDate: '03/20/2020',
      doctorCategory: 'Ophthalmology',
      doctorName: 'Hans Gunthenroc',
      doctorCountry: 'Germany',
      linkPath: '/categories/ophthalmology',
      linkImage: '../../assets/img/site/med_categories/allergies2.jpg',
      doctorAOP: 'Ophthalmology',
      doctorRating: '90%'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
