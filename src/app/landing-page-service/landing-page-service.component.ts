import { Component } from '@angular/core';
import { ServiceSectionPageLandingComponent } from '../service-section-page-landing/service-section-page-landing.component';
import { SectionServiceComponent } from '../section-service/section-service.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-landing-page-service',
  standalone: true,
  imports: [ ServiceSectionPageLandingComponent, SectionServiceComponent, FooterComponent],
  templateUrl: './landing-page-service.component.html',
  styleUrl: './landing-page-service.component.css'
})
export class LandingPageServiceComponent {

}
