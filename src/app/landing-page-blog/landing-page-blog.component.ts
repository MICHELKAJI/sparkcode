import { Component } from '@angular/core';
import { TeamSectionComponent } from '../team-section/team-section.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-landing-page-blog',
  standalone: true,
  imports: [ TeamSectionComponent, FooterComponent],
  templateUrl: './landing-page-blog.component.html',
  styleUrl: './landing-page-blog.component.css'
})
export class LandingPageBlogComponent {

}
