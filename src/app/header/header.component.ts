import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ NgClass, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isHovered = false;
  
  // Fonction pour changer l'état de hover
  toggleHover(state: boolean) {
    this.isHovered = state;
  }
}
