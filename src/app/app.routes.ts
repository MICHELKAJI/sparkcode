import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingPageWorksComponent } from './landing-page-works/landing-page-works.component';
import { LandingPageServiceComponent } from './landing-page-service/landing-page-service.component';

export const routes: Routes = [
    {path: "", component: LandingPageComponent},
    {path: "work", component: LandingPageWorksComponent},
    {path: "service", component: LandingPageServiceComponent}
];
