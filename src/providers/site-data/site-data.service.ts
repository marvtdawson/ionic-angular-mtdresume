import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiteDataService {

  siteName = 'Marvin T. Dawson';
  siteFooterName = 'Marvin T Dawson';
  siteTagLine = 'Sr. Full Stack Software Engineer';
  siteLogo = './assets/img/logo/medeviews_logo.jpg';
  siteLogoNoText = './assets/img/logo/medeviews_logo_no-text.jpg';
  siteKeywords = 'Medical, Reviews, Eviews, Electronic, Views' +
    'Medical Profiles, Physicians, Profiles, medeviews.com, Patients, Patient Reviews' +
    '' +
    'Mobile App, Mobile,' +
    'Marvin Dawson, Dawson Technical Consulting';
  year: number = new Date().getFullYear();

  constructor() {
  }
}
