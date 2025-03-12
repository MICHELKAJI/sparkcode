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
      stack: ['Angular', 'Tailwind CSS', 'GSAP'],
      photo: '/images/gislain.jpeg'
    },
    {
      name: 'Michel Kaji',
      title: 'Backend Developer',
      stack: ['Node.js', 'Express', 'Prisma'],
      photo: '/images/future.jpeg'
    },
    {
      name: 'Merlin Unikho',
      title: 'Fullstack Developer',
      stack: ['Next.js', 'Laravel', 'MySQL'],
      photo: '/images/merlin.jpeg'
    },
    {
      name: 'David Kim',
      title: 'Mobile Developer',
      stack: ['Flutter', 'Dart', 'Firebase'],
      photo: '/images/FFF.jpg'
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
