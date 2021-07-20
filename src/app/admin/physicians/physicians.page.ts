import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-physicians',
  templateUrl: './physicians.page.html',
  styleUrls: ['./physicians.page.scss'],
})
export class PhysiciansPage implements OnInit {

  pageTitle = 'Manage Physicians';
  constructor() { }

  ngOnInit() {
  }

}
