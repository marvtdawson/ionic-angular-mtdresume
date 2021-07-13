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
      linkPath: '/mattresses',
      linkImage: '../../assets/img/matts/beautyrest_black_mariela.png',
      linkText: 'Allergy and Immunology'
    },
    {
      thumbnailImg: true,
      linkPath: '/bedrooms',
      linkImage: '../../assets/img/bed_rm/Tabasco_Storage_King_Bed_Styled.jpg',
      linkText: 'Alternative Medicine'
    },
    {
      thumbnailImg: true,
      linkPath: '/living-rooms',
      linkImage: '../../assets/img/liv_rm/Compact-apartment-Moscow.jpg',
      linkText: 'Anesthesiology'
    },
    {
      thumbnailImg: true,
      linkPath: '/kitchens',
      linkImage: './assets/img/kitch/kitchen_image_2.jpg',
      linkText: 'Colon and Rectal Surgery'
    },
    {
      thumbnailImg: true,
      linkPath: '/dining-rooms',
      linkImage: './assets/img/dining_rm/dining-tables-slide-0XQB-jumbo.jpg',
      linkText: 'Dental'
    },
    {
      thumbnailImg: true,
      linkPath: '/bathrooms',
      linkImage: './assets/img/bath_rm/bathroom_1.jpg',
      linkText: 'Dermatology'
    },
    {
      thumbnailImg: true,
      linkPath: '/lamps',
      linkImage: './assets/img/lamps/1-splash-mobile-Table-Lamps.jpg',
      linkText: 'Dietcian'
    },
    {
      thumbnailImg: true,
      linkPath: '/tables',
      linkImage: './assets/img/tables/tyler-creek-counter-height-dining-room-table-0.jpg',
      linkText: 'Emergency Medicine'
    },
    {
      thumbnailImg: true,
      linkPath: '/recliners',
      linkImage: './assets/img/recliners/lansing-tufted-leather-recliner-with-nailheads-o.jpg',
      linkText: 'Family Medicine'
    },
    {
      thumbnailImg: true,
      linkPath: '/accessories',
      linkImage: './assets/img/accessories/eb079052b1972b81297106d1c55c573e.jpg',
      linkText: 'Internal Medicine'
    },
    {
      thumbnailImg: true,
      linkPath: '/accessories',
      linkImage: './assets/img/accessories/eb079052b1972b81297106d1c55c573e.jpg',
      linkText: 'Medical Facilitation'
    },
    {
      thumbnailImg: true,
      linkPath: '/accessories',
      linkImage: './assets/img/accessories/eb079052b1972b81297106d1c55c573e.jpg',
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
