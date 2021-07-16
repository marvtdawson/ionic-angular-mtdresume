import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  pageTitle = 'Register With MedEviews';
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
}
