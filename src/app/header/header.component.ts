import { NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuModaleComponent } from '../menu-modale/menu-modale.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ NgClass, RouterLink, MenuModaleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isHovered = false;
  
  // Fonction pour changer l'état de hover
  toggleHover(state: boolean) {
    this.isHovered = state;
  }
  isScrolled= false;

  @HostListener('window:scroll', [])
  onWindowScrolled(){
    this.isScrolled = window.scrollY >50;
  }
}
