import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-toggle-dark-mode',
  imports: [FormsModule],
  templateUrl: './toggle-dark-mode.component.html',
  styleUrl: './toggle-dark-mode.component.scss'
})
export class ToggleDarkModeComponent implements OnInit {
  @Output() onClick: EventEmitter<any> = new EventEmitter();
  check: boolean = false;
  ngOnInit() {
    const element = document.querySelector('html');
    if (element?.classList.contains('my-app-dark')) {
      this.check=true;
    }
  }
  toggleDarkMode() {
    this.onClick.emit(true);
  }
}
