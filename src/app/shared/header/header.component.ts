import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { ImportsModule } from '../imports';
import { ToggleDarkModeComponent } from "../../shared/toggle-dark-mode/toggle-dark-mode.component";
import { loggedMenu,notLoggedMenu } from "../menuElements";

@Component({
  selector: 'app-header',
  imports: [ImportsModule,ToggleDarkModeComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  items: MegaMenuItem[] | undefined;

  ngOnInit() {
    let token = localStorage.getItem("Token");
    if (token) {
      this.items = loggedMenu;
    } else {
      this.items = notLoggedMenu;
    }

  }

  toggleDarkMode() {
    const element = document.querySelector('html');
    element?.classList.toggle('my-app-dark');
}
}
