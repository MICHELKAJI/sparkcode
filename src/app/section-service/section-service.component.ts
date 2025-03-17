import { NgFor, NgIf } from '@angular/common';
import { AfterViewInit, Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-section-service',
  standalone: true,
  imports: [ NgFor, ContactComponent],
  templateUrl: './section-service.component.html',
  styleUrl: './section-service.component.css'
})
export class SectionServiceComponent implements OnInit, AfterViewInit {
  
  services = [
    {
      title: 'Digital Marketing',
      detail: 'Boost your visibility with innovative and targeted marketing strategies.',
      image: '/images/marketing.jpg'
    },
    {
      title: 'Web Design',
      detail: 'Create intuitive and modern interfaces adapted to all your needs.',
      image: '/images/webdesign.jpg'
    },
    {
      title: 'Web Development',
      detail: 'Develop high-performance and secure custom web applications.',
      image: '/images/devsoftware.jpg'
    },
    {
      title: 'Mobile development',
      detail: 'Create effective Android mobile apps tailored to your audience.',
      image: '/images/mobilesoftware.jpg'
    }
  ];

  selectedService = this.services[0];

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInitOne(): void {
    this.animateContent();
  }

  selectService(service: any): void {
    this.selectedService = service;
    this.animateContent();
  }

  animateContent(): void {
    gsap.from('.content-container', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out'
    });
  }
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
