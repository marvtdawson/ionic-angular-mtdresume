import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  pageTitle = 'Admin Page';
  userFirstName = 'Marvin';
  userLastName = 'Dawson';

  public adminPages = [
    {
      title: 'Inbox',
      url: '/admin/inbox',
      icon: 'mic'
    },
    {
      title: 'Blogs',
      url: '/admin/blog',
      icon: 'play'
    },
    {
      title: 'Patients',
      url: '/admin/patients',
      icon: 'musical-notes'
    },
    {
      title: 'Physicians',
      url: '/admin/physicians',
      icon: 'people'
    },
    {
      title: 'Site Pages',
      url: '/admin/site-pages',
      icon: 'documents'
    },
    {
      title: 'Site Layout',
      url: '/admin/site-layout',
      icon: 'layers'
    },
    {
      title: 'Payment Options',
      url: '/admin/payments',
      icon: 'card'
    },
    {
      title: 'Account',
      url: '/admin/account',
      icon: 'settings'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
