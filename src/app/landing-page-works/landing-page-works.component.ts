import { Component } from '@angular/core';
import { BannarSectionProjectComponent } from '../bannar-section-project/bannar-section-project.component';

@Component({
  selector: 'app-landing-page-works',
  standalone: true,
  imports: [ BannarSectionProjectComponent],
  templateUrl: './landing-page-works.component.html',
  styleUrl: './landing-page-works.component.css'
})
export class LandingPageWorksComponent {

}
