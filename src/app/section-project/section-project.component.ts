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
      title: 'Landing Page Charity',
      category: 'Site Vitrine',
      stack: ['Angular', 'Tailwind', 'GSAP', 'Express', 'prisma', 'PostgreSQL'],
      image: '/images/apeh.PNG',
      link: 'https://apeh.vercel.app/'
    },
    {
      title: 'E-commerce Platform',
      category: 'Application Web',
      stack: ['Vanila js', 'Node.js', 'MongoDB'],
      image: '/images/style.PNG',
      link: 'https://shope-theta.vercel.app/index.html'
    },
    {
      title: 'SaaS CRM',
      category: 'SaaS',
      stack: ['Next.js', 'Express', 'PostgreSQL', 'prisma', 'clerk'],
      image: '/images/saas.jpg',
      link: 'https://example.com'
    },
    {
      title: 'Portfolio Designer',
      category: 'Site Vitrine',
      stack: ['React', 'Motion', 'Tailwind'],
      image: '/images/portofolio.PNG',
      link: 'https://portofolio-mkj.vercel.app/'
    },
    {
      title: 'Task Management App',
      category: 'Application Web',
      stack: ['React', 'Tailwind', 'Gesap'],
      image: '/images/miva.PNG',
      link: 'https://mivatakatishagroup.vercel.app/'
    },
    {
      title: 'Task Management App',
      category: 'Application Web',
      stack: ['React', ''],
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
