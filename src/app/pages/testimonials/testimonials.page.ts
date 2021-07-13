import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.page.html',
  styleUrls: ['./testimonials.page.scss'],
})
export class TestimonialsPage implements OnInit {

  pageTitle = 'What are people saying about MedEviews';
  constructor() { }

  ngOnInit() {
  }

}
