import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { SectionServiceComponent } from '../section-service/section-service.component';
import { SectionProjectComponent } from '../section-project/section-project.component';
import { FooterComponent } from '../footer/footer.component';
import { TeamComponent } from '../team/team.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ BannerComponent, SectionServiceComponent, SectionProjectComponent, FooterComponent, TeamComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
