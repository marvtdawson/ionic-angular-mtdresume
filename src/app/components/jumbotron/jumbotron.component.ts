import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {SiteDataService} from '../../../providers/site-data/site-data.service';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss'],
})
export class JumbotronComponent implements OnInit {
  siteTagLine = this.siteData.siteTagLine;
  pageHeaderImg = '../../assets/img/site/pageHeaders/dallas1_cropped.jpg';
  searchForm: FormGroup;
  constructor(private siteData: SiteDataService) { }

  ngOnInit() {
  }

  onSubmit() {}

}
