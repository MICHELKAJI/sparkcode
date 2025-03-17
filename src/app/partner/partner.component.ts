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
    'KivuExpress',
    'Nad Luxe',
    'Miva Takatisha',
    'Kivu Brand',
    'Lacasa',
    'KivuExpress',
    'Nad Luxe',
    'Miva Takatisha',
    'Kivu Brand'
  ];

  ngAfterViewInit(): void {
    this.startInfiniteScroll();
  }

  startInfiniteScroll() {
    const container = this.scrollContainer.nativeElement;
    const itemWidth = container.scrollWidth / 2; // moitié car liste doublée

    gsap.to(container, {
      x: -itemWidth,
      duration: 20, // ajuste la vitesse (plus bas = plus rapide)
      ease: 'linear',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % itemWidth)
      }
    });
  }
}
