import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  // customerSatisfactionImage = '';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  openRegisterModal() {
    this.router.navigate(['/register'])
      .then()
      .catch();
  }

}
