import { NgFor } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-bannar-section-project',
  standalone: true,
  imports: [ NgFor],
  templateUrl: './bannar-section-project.component.html',
  styleUrl: './bannar-section-project.component.css'
})
export class BannarSectionProjectComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    // Animation GSAP
    gsap.from('.animate-title', { opacity: 0, y: -50, duration: 1 });
    gsap.from('.animate-subtitle', { opacity: 0, y: -20, duration: 1, delay: 0.5 });
    gsap.from('.animate-buttons', { opacity: 0, y: 20, duration: 1, delay: 1 });
    gsap.from('.schema-options div', { opacity: 0, scale: 0.8, stagger: 0.2, delay: 1.5 });
  }

  

}
