import { Component, AfterViewInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import gsap from 'gsap';


@Component({
  selector: 'app-service-section-page-landing',
  standalone: true,
  imports: [],
  templateUrl: './service-section-page-landing.component.html',
  styleUrl: './service-section-page-landing.component.css'
})
export class ServiceSectionPageLandingComponent implements AfterViewInit {
  @ViewChild('rainCanvas') rainCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('container') container!: ElementRef;

  private ctx!: CanvasRenderingContext2D;
  private drops: { x: number; y: number; length: number; speed: number }[] = [];
  private canvas!: HTMLCanvasElement;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.initAnimations();
    this.setupRainEffect();
  }

  private initAnimations() {
    gsap.from(this.container.nativeElement.querySelectorAll('h1, h2, p, button'), {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      ease: 'power3.out',
      duration: 1.2,
    });
  }

  private setupRainEffect() {
    this.canvas = this.rainCanvas.nativeElement;
    this.ctx = this.canvas.getContext('2d')!;

    const resizeCanvas = () => {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Initialize drops
    this.drops = Array.from({ length: 100 }, () => ({
      x: Math.random() * this.canvas.width,
      y: Math.random() * this.canvas.height,
      length: Math.random() * 20 + 10,
      speed: Math.random() * 2 + 2,
    }));

    this.animateRain();
  }

  private animateRain() {
    requestAnimationFrame(() => this.animateRain());

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
    this.ctx.lineWidth = 1;
    this.ctx.lineCap = 'round';

    for (let drop of this.drops) {
      this.ctx.beginPath();
      this.ctx.moveTo(drop.x, drop.y);
      this.ctx.lineTo(drop.x, drop.y + drop.length);
      this.ctx.stroke();

      drop.y += drop.speed;
      if (drop.y > this.canvas.height) {
        drop.y = -drop.length;
        drop.x = Math.random() * this.canvas.width;
      }
    }
  }

}
