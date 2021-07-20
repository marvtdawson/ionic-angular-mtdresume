import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {

  pageTitle = 'Latest News';
  pageHeaderImg = '../../../assets/img/site/pageHeaders/blog-it.jpg';
  pageHeaderImgAlt = 'Blog Image';
  articles = [
    {
      blogDate: '03/03/2021',
      blogCategory: 'Genetics',
      blogTitle: 'Article 1',
      blogArticleImg: '../../assets/img/site/blog/article1',
      blogArticleSummary: 'This is a test description as a placeholder for now,' +
        ' we will add some real content in a minute.  View More....'
    },
    {
      blogDate: '03/10/2021',
      blogCategory: 'Dental',
      blogTitle: 'Article 2',
      blogArticleImg: '../../assets/img/site/blog/article1',
      blogArticleSummary: 'This is a test description as a placeholder for now,' +
        ' we will add some real content in a minute.  View More....'
    },
    {
      blogDate: '03/17/2021',
      blogCategory: 'Cosmetics',
      blogTitle: 'Article 3',
      blogArticleImg: '../../assets/img/site/blog/article1',
      blogArticleSummary: 'This is a test description as a placeholder for now,' +
        ' we will add some real content in a minute.  View More....'
    },
    {
      blogDate: '03/24/2021',
      blogCategory: 'Pharmacy',
      blogTitle: 'Article 4',
      blogArticleImg: '../../assets/img/site/blog/article1',
      blogArticleSummary: 'This is a test description as a placeholder for now,' +
        ' we will add some real content in a minute.  View More....'
    },
    {
      blogDate: '04/1/2021',
      blogCategory: 'Dermatology',
      blogTitle: 'Article 5',
      blogArticleImg: `<i class="far fa-newspaper fa-9x"></i>`,
      blogArticleSummary: 'This is a test description as a placeholder for now,' +
        ' we will add some real content in a minute.  View More....'
    }
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  openSubscribeModal() {
    this.router.navigate(['/subscribe'])
      .then()
      .catch();
  }

  joinCommunity() {
    this.router.navigate(['/register'])
      .then()
      .catch();
  }

}
