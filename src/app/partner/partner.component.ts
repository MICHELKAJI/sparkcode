import { NgFor } from '@angular/common';
import { Component,  AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-partner',
  standalone: true,
  imports: [ NgFor],
  templateUrl: './partner.component.html',
  styleUrl: './partner.component.css'
})
export class PartnerComponent implements AfterViewInit {
  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef;

  clients: string[] = [
    'Lacasa',
    'Mk2Business',
    'MivaTakatisha',
    'Nad Haire',
    'KivuExpress',
    'AlphaDesign',
    'NextWave',
    'EcoSolutions',
    'FutureCorp',
    'CyberLink'
  ];

  ngAfterViewInit(): void {
    this.startScrolling();
  }

  startScrolling() {
    const container = this.scrollContainer.nativeElement;
    const width = container.scrollWidth;

    gsap.fromTo(container, 
      { x: 0 }, 
      {
        x: -width,
        duration: 30,
        ease: 'linear',
        repeat: -1
      }
    );
  }
}
