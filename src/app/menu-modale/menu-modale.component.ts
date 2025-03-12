import { NgClass } from '@angular/common';
import { Component, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import gsap from 'gsap';
import { TeamComponent } from '../team/team.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-modale',
  standalone: true,
  imports: [ NgClass, RouterLink ],
  templateUrl: './menu-modale.component.html',
  styleUrl: './menu-modale.component.css'
})
export class MenuModaleComponent {
  @ViewChild('modal') modal!: ElementRef;
  @Output() closeModalEvent = new EventEmitter<void>();
  @ViewChild('box') box!:ElementRef

  isVisible = false;
  showModal() {
    this.isVisible = true;
    gsap.fromTo(
      this.modal.nativeElement,
      { opacity: 0, x: "-100%" }, // Commence à gauche (hors écran)
      { opacity: 1, x: "0%", duration: 0.5, ease: "power3.out" } // Arrive au centre
    );
  }
  
  closeModal() {
    gsap.to(this.modal.nativeElement, {
      opacity: 0,
      x: "-100%", // Glisse vers la gauche
      duration: 0.4,
      ease: "power3.in",
      onComplete: () => {
        this.isVisible = false;
        this.closeModalEvent.emit(); // Notifie le parent
      }
    });
  }

}
