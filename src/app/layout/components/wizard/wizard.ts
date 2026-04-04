import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wizard',
  imports: [CommonModule],
  templateUrl: './wizard.html',
  styleUrl: './wizard.scss',
  standalone: true,
})
export class Wizard {

  step = 1;

  constructor(private router: Router) {
    this.updateStep(this.router.url);

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateStep(event.urlAfterRedirects);
      }
    });
  }

  private updateStep(url: string) {
    if (url.includes('paso1')) this.step = 1;
    else if (url.includes('paso2')) this.step = 2;
    else if (url.includes('paso3')) this.step = 3;
    else if (url.includes('paso4')) this.step = 4;
  }

}