import { Component, signal } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('gestion-contratos');

  constructor(private router: Router) {
    // Cada vez que termina la navegación, hacer scroll al top
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => window.scrollTo(0, 0));
  }
}