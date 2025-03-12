import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingPageWorksComponent } from './landing-page-works/landing-page-works.component';
import { LandingPageServiceComponent } from './landing-page-service/landing-page-service.component';
import { LandingPageBlogComponent } from './landing-page-blog/landing-page-blog.component';

export const routes: Routes = [
    {path: "", component: LandingPageComponent},
    {path: "work", component: LandingPageWorksComponent},
    {path: "team", component: LandingPageBlogComponent},
    {path: "service", component: LandingPageServiceComponent}
];
