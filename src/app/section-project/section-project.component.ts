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
      title: 'Landing Page Kivu Brand',
      category: 'Showcase Site',
      stack: ['React', 'Motion','Tailwind','ExpressJs', 'postgreSql', 'Prisma', 'JWT'],
      image: '/images/kivuPNG.PNG',
      link: 'https://kivubrand.com/'
    },
    {
      title: 'Landing Page Charity',
      category: 'Showcase Site',
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
      category: 'Showcase Site',
      stack: ['React', 'Motion', 'Tailwind'],
      image: '/images/portofolio.PNG',
      link: 'https://portofolio-mkj.vercel.app/'
    },
    {
      title: 'Landing page for Cleaning service',
      category: 'Web Application',
      stack: ['React', 'Tailwind', 'Gsap'],
      image: '/images/miva.PNG',
      link: 'https://mivatakatishagroup.vercel.app/'
    },
    {
      title: 'Real estate agency',
      category: 'Web Application',
      stack: ['React', 'Motion','Tailwind','ExpressJs', 'postgreSql', 'Prisma', 'JWT'],
      image: '/images/lacasa.PNG',
      link: 'https://lacasa-eta.vercel.app/'
    },
  ];

  filteredProjects = [...this.projects];
  activeFilter = 'All';

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.animateProjects();
  }

  filterProjects(category: string): void {
    this.activeFilter = category;
    this.filteredProjects = category === 'All' 
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
