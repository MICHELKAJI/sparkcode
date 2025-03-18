import { Component, EventEmitter, Output, ViewChildren,QueryList, ElementRef  } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScheduleComponent } from '../schedule/schedule.component';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ RouterLink, ScheduleComponent ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @Output() closeModalEvent = new EventEmitter<void>();
    isVisible = false;
  
    showModal() {
      this.isVisible = true;
    }
  
    closeModal() {
      this.isVisible = false;
      this.closeModalEvent.emit();
    }
    @ViewChildren('animatedBox') animatedBoxes!: QueryList<ElementRef>;

    ngAfterViewInit() {
      this.animatedBoxes.forEach((box, index) => {
        gsap.from(box.nativeElement, {
          opacity: 0,
          y: 100,
          scale: 0.9,
          duration: 1.2,
          ease: "power3.out",
          delay: index * 0.2, // Décalage progressif des animations
          scrollTrigger: {
            trigger: box.nativeElement,
            start: "top 85%", // Déclenchement quand l’élément est visible
            toggleActions: "play none none none",
          },
        });
      });
    }  
}
