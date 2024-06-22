import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-host-listener',
  standalone: true,
  imports: [],
  templateUrl: './host-listener.component.html',
  styleUrl: './host-listener.component.css'
})
export class HostListenerComponent {
  count = 0;

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.increment();
    }
  }

  increment() {
    this.count++;
  }

}
