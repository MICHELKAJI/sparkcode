import { NgFor } from '@angular/common';
import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-team-section',
  standalone: true,
  imports: [ NgFor],
  templateUrl: './team-section.component.html',
  styleUrl: './team-section.component.css'
})
export class TeamSectionComponent implements OnInit, AfterViewInit {
  developers = [
    {
      name: 'Gislain Sulu',
      title: 'Frontend Developer',
      stack: ['Laravel', 'Tailwind CSS', 'GSAP', 'Next.js', 'React'],
      photo: '/images/gislain.jpeg'
    },
    {
      name: 'Michel Kaji',
      title: 'Fullstack Web Developper',
      stack: ['React','Tailwind', 'Express', 'Prisma', 'Angular', 'Motion', 'Gsap', 'Next.js'],
      photo: '/images/future.jpeg'
    },
    {
      name: 'Merlin Kams',
      title: 'Fullstack Developer',
      stack: ['PHP', 'Laravel', 'MySQL','Nginx', 'Apache'],
      photo: '/images/merlin.jpeg'
    },
    {
      name: 'Gerardo Tango',
      title: 'Web design',
      stack: ['Figma', 'Suit Adob', 'React', 'Tailwind', 'WordPress'],
      photo: '/images/gerardo.jpeg'
    }
  ];

  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.animateProfiles();
  }

  animateProfiles() {
    const cards = this.el.nativeElement.querySelectorAll('.profile-card');

    cards.forEach((card: HTMLElement) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
        }
      });
    });
  }

}
