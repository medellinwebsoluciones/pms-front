
import { ImportsModule } from '../imports';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { Menu } from 'primeng/menu';
import { RouterModule } from '@angular/router';
import { SocialMediaComponent } from '../social-media/social-media.component';

@Component({
  selector: 'app-footer',
  imports: [ImportsModule,RouterModule,SocialMediaComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(private router: Router) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Navigate',
        items: [
          {
            label: 'Router Link',
            icon: 'pi pi-palette',
            route: '/guides/csslayer'
          },
          {
            label: 'Programmatic',
            icon: 'pi pi-link',
            command: () => {
              this.router.navigate(['/installation']);
            }
          },
          {
            label: 'External',
            icon: 'pi pi-home',
            url: 'https://angular.io//'
          }
        ]
      }
    ];
  }

}
