import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScheduleComponent } from '../schedule/schedule.component';

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

}
