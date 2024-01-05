import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
export const routes: Routes = [
    { path: '', 'title':'Hem', component: HomePageComponent },
    { path: 'kontakt','title':'Kontakt', component: ContactPageComponent },
  // Add more routes if needed


    //always have 404 last in the array
    { path: '**','title':'404', component: PageNotFoundComponent }
  
  ];