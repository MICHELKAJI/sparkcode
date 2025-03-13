import { Component, OnInit, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-team',
  standalone: true,
  imports: [ RouterLink],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.initAnimations();
  }

  initAnimations() {
    const container = this.el.nativeElement.querySelector('.team-container');

    gsap.from(container, {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
      }
    });
  }


}
