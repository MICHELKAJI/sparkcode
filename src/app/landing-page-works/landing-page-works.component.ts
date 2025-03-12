import { Component } from '@angular/core';
import { BannarSectionProjectComponent } from '../bannar-section-project/bannar-section-project.component';
import { SectionProjectComponent } from '../section-project/section-project.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-landing-page-works',
  standalone: true,
  imports: [ BannarSectionProjectComponent, SectionProjectComponent, FooterComponent],
  templateUrl: './landing-page-works.component.html',
  styleUrl: './landing-page-works.component.css'
})
export class LandingPageWorksComponent {

}
