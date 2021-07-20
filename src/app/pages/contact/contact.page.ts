import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {SiteDataService} from '../../../providers/site-data/site-data.service';
import {unitedStatesServiceList} from '../../../providers/forms/united-states.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  // pageTitle = 'Contact Us';
  siteName = this.siteData.siteName;
  siteLogo = this.siteData.siteLogo;
  tagLine = this.siteData.siteTagLine;
  pageHeaderImg = '../../../assets/img/site/pageHeaders/contact.jpg';
  pageHeaderImgAlt = 'Contact Image';
  stateOptions: any;
  contactForm: FormGroup;
  date = new Date();
  constructor(private siteData: SiteDataService) {
    this.stateOptions = unitedStatesServiceList;
  }

  ngOnInit() {
    this.contactForm = new FormGroup({
      contactFirstName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(24),
        // Validators.pattern('[a-z][A-Z]')
      ]),
      contactLastName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(24),
        // Validators.pattern('[a-z][A-Z]')
      ]),
      contactEmail: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(2),
        Validators.maxLength(35)
      ]),
      contactState: new FormControl('', [
        Validators.required
      ]),
      contactCity: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(35),
        // Validators.pattern('[a-z][A-Z]')
      ]),
      contactMessage: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(250)
      ])
    });
  }

  onSubmit() {}

  get contactFirstName() {
    return this.contactForm.get('contactFirstName');
  }

  get contactLastName() {
    return this.contactForm.get('contactLastName');
  }

  get contactEmail() {
    return this.contactForm.get('contactEmail');
  }

  get contactState() {
    return this.contactForm.get('contactState');
  }

  get contactCity() {
    return this.contactForm.get('contactCity');
  }

  get contactMessage() {
    return this.contactForm.get('contactMessage');
  }

}
