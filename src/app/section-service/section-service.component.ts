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
      image: 'https://cdn-icons-png.flaticon.com/512/5696/5696935.png'
    },
    {
      title: 'Web Design',
      detail: 'Créez des interfaces intuitives et modernes adaptées à tous vos besoins.',
      image: 'https://cdn-icons-png.flaticon.com/512/2922/2922017.png'
    },
    {
      title: 'Développement Web',
      detail: 'Développez des applications web performantes et sécurisées sur mesure.',
      image: 'https://cdn-icons-png.flaticon.com/512/919/919827.png'
    },
    {
      title: 'Développement Android',
      detail: 'Créez des applications mobiles Android efficaces et adaptées à votre audience.',
      image: 'https://cdn-icons-png.flaticon.com/512/888/888839.png'
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
