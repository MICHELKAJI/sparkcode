import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { SectionServiceComponent } from '../section-service/section-service.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ BannerComponent, SectionServiceComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
