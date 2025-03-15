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
      title: 'Digital Marketing',
      detail: 'Boost your visibility with innovative and targeted marketing strategies.',
      image: '/images/marketing.jpg'
    },
    {
      title: 'Web Design',
      detail: 'Create intuitive and modern interfaces adapted to all your needs.',
      image: '/images/webdesign.jpg'
    },
    {
      title: 'Web Development',
      detail: 'Develop high-performance and secure custom web applications.',
      image: '/images/devsoftware.jpg'
    },
    {
      title: 'Mobile development',
      detail: 'Create effective Android mobile apps tailored to your audience.',
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
