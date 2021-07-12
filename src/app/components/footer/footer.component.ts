import { Component, OnInit } from '@angular/core';
import {SiteDataService} from '../../../providers/site-data/site-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  siteName = this.siteData.siteName;
  siteFooterName = this.siteData.siteFooterName;
  date = this.siteData.year;
  constructor(private siteData: SiteDataService,
              private router: Router) { }

  ngOnInit() {}

  getContactForm() {
    this.router.navigate(['/contact'])
      .then()
      .catch();
  }

  subscribeToMedEviews() {}

}
