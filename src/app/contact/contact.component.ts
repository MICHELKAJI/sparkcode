import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements AfterViewInit {

  @Output() closeModalEvent = new EventEmitter<void>();
  isVisible = false;

  // Référence au conteneur modal (tu dois ajouter #modalWrapper dans le HTML)
  @ViewChild('modalWrapper') modalWrapper!: ElementRef;

  ngAfterViewInit() {
    // Si le modal est déjà visible à l'init
    if (this.isVisible) {
      this.animateOpen();
    }
  }

  showModal() {
    this.isVisible = true;

    // Petite attente le temps que le DOM affiche l'élément
    setTimeout(() => {
      this.animateOpen();
    }, 0);
  }

  closeModal() {
    // Animation de fermeture
    this.animateClose();
  }

  private animateOpen() {
    if (!this.modalWrapper) return;

    gsap.fromTo(
      this.modalWrapper.nativeElement,
      { opacity: 0, y: -50, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'power3.out' }
    );
  }

  private animateClose() {
    if (!this.modalWrapper) return;

    gsap.to(this.modalWrapper.nativeElement, {
      opacity: 0,
      y: -50,
      scale: 0.9,
      duration: 0.4,
      ease: 'power3.in',
      onComplete: () => {
        this.isVisible = false;
        this.closeModalEvent.emit();
      }
    });
  }
}
