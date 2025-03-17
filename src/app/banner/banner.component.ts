import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';
import { ScheduleComponent } from '../schedule/schedule.component';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [ScheduleComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent implements AfterViewInit {
  ngAfterViewInit(): void {
      // Animation GSAP
      gsap.from('.animate-title', { opacity: 0, y: -50, duration: 1 });
      gsap.from('.animate-subtitle', { opacity: 0, y: -20, duration: 1, delay: 0.5 });
      gsap.from('.animate-buttons', { opacity: 0, y: 20, duration: 1, delay: 1 });
      gsap.from('.schema-options div', { opacity: 0, scale: 0.8, stagger: 0.2, delay: 1.5 });
    }

}
