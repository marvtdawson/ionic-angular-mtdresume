import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiteDataService {

  siteName = 'MedEviews';
  siteFooterName = 'MedEviews LLC';
  siteTagLine = 'Find A Local Physician';
  siteLogo = './assets/img/logo/medeviews_logo.jpg';
  siteKeywords = 'Medical, Reviews, Eviews, Electronic, Views' +
    'Medical Profiles, Physicians, Profiles, medeviews.com, Patients, Patient Reviews' +
    '' +
    'Mobile App, Mobile,' +
    'Marvin Dawson, Dawson Technical Consulting';
  year: number = new Date().getFullYear();

  constructor() {
  }
}
