import { NgFor, NgIf } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-section-service',
  standalone: true,
  imports: [ NgFor],
  templateUrl: './section-service.component.html',
  styleUrl: './section-service.component.css'
})
export class SectionServiceComponent implements OnInit, AfterViewInit {
  
  services = [
    {
      title: 'Marketing Digital',
      detail: 'Boostez votre visibilité grâce à des stratégies marketing innovantes et ciblées.',
      image: '/images/marketing.jpg'
    },
    {
      title: 'Web Design',
      detail: 'Créez des interfaces intuitives et modernes adaptées à tous vos besoins.',
      image: '/images/webdesign.jpg'
    },
    {
      title: 'Développement Web',
      detail: 'Développez des applications web performantes et sécurisées sur mesure.',
      image: '/images/devsoftware.jpg'
    },
    {
      title: 'Développement Android',
      detail: 'Créez des applications mobiles Android efficaces et adaptées à votre audience.',
      image: '/images/mobilesoftware.jpg'
    }
  ];

  selectedService = this.services[0];

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.animateContent();
  }

  selectService(service: any): void {
    this.selectedService = service;
    this.animateContent();
  }

  animateContent(): void {
    gsap.from('.content-container', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out'
    });
  }

}
