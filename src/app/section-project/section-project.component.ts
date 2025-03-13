import { NgFor } from '@angular/common';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-section-project',
  standalone: true,
  imports: [ NgFor],
  templateUrl: './section-project.component.html',
  styleUrl: './section-project.component.css'
})
export class SectionProjectComponent implements OnInit, AfterViewInit {
  projects = [
    {
      title: 'Landing Page AI',
      category: 'Site Vitrine',
      stack: ['Next.js', 'Tailwind', 'GSAP'],
      image: '/images/apeh.PNG',
      link: 'https://example.com'
    },
    {
      title: 'E-commerce Platform',
      category: 'Application Web',
      stack: ['React', 'Node.js', 'MongoDB'],
      image: '/images/style.PNG',
      link: 'https://shope-theta.vercel.app/index.html'
    },
    {
      title: 'SaaS CRM',
      category: 'SaaS',
      stack: ['Angular', 'NestJS', 'PostgreSQL'],
      image: 'https://source.unsplash.com/400x300/?saas',
      link: 'https://example.com'
    },
    {
      title: 'Portfolio Designer',
      category: 'Site Vitrine',
      stack: ['Vue.js', 'Nuxt', 'Tailwind'],
      image: '/images/portofolio.PNG',
      link: 'https://portofolio-mkj.vercel.app/'
    },
    {
      title: 'Task Management App',
      category: 'Application Web',
      stack: ['React', 'Firebase'],
      image: '/images/miva.PNG',
      link: 'https://mivatakatishagroup.vercel.app/'
    },
    {
      title: 'Task Management App',
      category: 'Application Web',
      stack: ['React', 'Firebase'],
      image: '/images/lacasa.PNG',
      link: 'https://lacasa-eta.vercel.app/'
    }
  ];

  filteredProjects = [...this.projects];
  activeFilter = 'Tous';

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.animateProjects();
  }

  filterProjects(category: string): void {
    this.activeFilter = category;
    this.filteredProjects = category === 'Tous' 
      ? [...this.projects] 
      : this.projects.filter(p => p.category === category);

    this.animateProjects();
  }

  animateProjects(): void {
    gsap.from('.project-card', {
      opacity: 0,
      y: 50,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out'
    });
  }
}
