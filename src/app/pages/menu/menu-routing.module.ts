import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MenuPage} from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: '',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },{
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../about/about.module').then( m => m.AboutPageModule)
      },
      {
        path: 'patients',
        loadChildren: () => import('../patients/patients.module').then( m => m.PatientsPageModule)
      },
      {
        path: 'physicians',
        loadChildren: () => import('../physicians/physicians.module').then( m => m.PhysiciansPageModule)
      },
      {
        path: 'tabs',
        loadChildren: () => import('../../tabs/tabs.module').then(m => m.TabsPageModule),
        children: [
          {
            path: 'tab1',
            loadChildren: () => import('../../tab1/tab1.module').then(m => m.Tab1PageModule)
          },
          {
            path: 'tab2',
            loadChildren: () => import('../../tab2/tab2.module').then(m => m.Tab2PageModule)
          },
          {
            path: 'tab3',
            loadChildren: () => import('../../tab3/tab3.module').then(m => m.Tab3PageModule)
          },
          // {
          //   path: '',
          //   redirectTo: '/tabs/tab1',
          //   pathMatch: 'full'
          // }
        ]
      },
      {
        path: 'contact',
        loadChildren: () => import('../contact/contact.module').then(m => m.ContactPageModule)
      },{
        path: 'subscribe',
        loadChildren: () => import('../subscribe/subscribe.module').then(m => m.SubscribePageModule)
      },
      {
        path: 'blog',
        loadChildren: () => import('../blog/blog.module').then(m => m.BlogPageModule)
      },
      {
        path: 'reviews',
        loadChildren: () => import('../reviews/reviews.module').then( m => m.ReviewsPageModule)
      },
      {
        path: 'location',
        loadChildren: () => import('../location/location.module').then( m => m.LocationPageModule)
      },
      {
        path: 'testimonials',
        loadChildren: () => import('../testimonials/testimonials.module').then( m => m.TestimonialsPageModule)
      },
      {
        path: 'mobile-app',
        loadChildren: () => import('../mobile-app/mobile-app.module').then(m => m.MobileAppPageModule)
      },
      {
        path: 'terms-conditions',
        loadChildren: () => import('../terms-conditions/terms-conditions.module').then(m => m.TermsConditionsPageModule)
      },
      {
        path: 'privacy',
        loadChildren: () => import('../private-policy/private-policy.module').then(m => m.PrivatePolicyPageModule)
      },
      {
        path: 'register',
        loadChildren: () => import('../register/register.module').then( m => m.RegisterPageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'logout',
        loadChildren: () => import('../logout/logout.module').then(m => m.LogoutPageModule)
      },
      {
        path: 'history',
        loadChildren: () => import('../history/history.module').then( m => m.HistoryPageModule)
      },
      {
        path: 'covid',
        loadChildren: () => import('../covid/covid.module').then( m => m.CovidPageModule)
      },
      {
        path: 'services',
        loadChildren: () => import('../services/services.module').then( m => m.ServicesPageModule)
      },
      {
        path: 'faqs',
        loadChildren: () => import('../faqs/faqs.module').then( m => m.FaqsPageModule)
      },
      {
        path: 'pricing',
        loadChildren: () => import('../pricing/pricing.module').then( m => m.PricingPageModule)
      },
      {
        path: 'categories',
        loadChildren: () => import('../../categories/categories.module').then(m => m.CategoriesPageModule),
        children: [
          {
            path: 'allergies',
            loadChildren: () => import('../../categories/allergies/allergies.module').then(m => m.AllergiesPageModule)
          },
          {
            path: 'alternative-medicine',
            loadChildren: () => import('../../categories/alternative-medicine/alternative-medicine.module')
              .then( m => m.AlternativeMedicinePageModule)
          },
          {
            path: 'dental',
            loadChildren: () => import('../../categories/dental/dental.module').then( m => m.DentalPageModule)
          },
          {
            path: 'anesthesiology',
            loadChildren: () => import('../../categories/anesthesiology/anesthesiology.module').then( m => m.AnesthesiologyPageModule)
          },
          {
            path: 'digestive',
            loadChildren: () => import('../../categories/digestive/digestive.module').then( m => m.DigestivePageModule)
          },
          {
            path: 'dermatology',
            loadChildren: () => import('../../categories/dermatology/dermatology.module').then( m => m.DermatologyPageModule)
          },
          {
            path: 'dietitian',
            loadChildren: () => import('../../categories/dietitian/dietitian.module')
              .then( m => m.DietitianPageModule)
          },
          {
            path: 'emergency-medicine',
            loadChildren: () => import('../../categories/emergency-medicine/emergency-medicine.module')
              .then( m => m.EmergencyMedicinePageModule)
          },
          {
            path: 'family-medicine',
            loadChildren: () => import('../../categories/family-medicine/family-medicine.module')
              .then( m => m.FamilyMedicinePageModule)
          },
          {
            path: 'medical-facilitation',
            loadChildren: () => import('../../categories/medical-facilitation/medical-facilitation.module')
              .then( m => m.MedicalFacilitationPageModule)
          },
          {
            path: 'internal-medicine',
            loadChildren: () => import('../../categories/internal-medicine/internal-medicine.module')
              .then( m => m.InternalMedicinePageModule)
          },
          {
            path: 'genetics',
            loadChildren: () => import('../../categories/genetics/genetics.module').then( m => m.GeneticsPageModule)
          },
          {
            path: 'cosmetics',
            loadChildren: () => import('../../categories/cosmetics/cosmetics.module')
              .then( m => m.CosmeticsPageModule)
          },
          {
            path: 'ophthalmology',
            loadChildren: () => import('../../categories/ophthalmology/ophthalmology.module')
              .then( m => m.OphthalmologyPageModule)
          },
          {
            path: 'pharmaceutical',
            loadChildren: () => import('../../categories/pharmaceutical/pharmaceutical.module')
              .then( m => m.PharmaceuticalPageModule)
          },
        ]
      },
      {
        path: 'admin',
        loadChildren: () => import('../../admin/admin.module').then( m => m.AdminPageModule)
      },
      {
        path: 'sitemap',
        loadChildren: () => import('../sitemap/sitemap.module').then( m => m.SitemapPageModule)
      },
      {
        path: 'page-not-found',
        loadChildren: () => import('../page-not-found/page-not-found.module').then(m => m.PageNotFoundPageModule)
      },
      {
        path: '**',
        loadChildren: () => import('../page-not-found/page-not-found.module').then(m => m.PageNotFoundPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {
}
