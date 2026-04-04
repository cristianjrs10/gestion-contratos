import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
  
import { Header } from '../components/header/header';
import { Wizard } from '../components/wizard/wizard';
@Component({
  selector: 'app-main-layout',
  imports: [
    RouterOutlet,
    Header,
    Wizard,
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
  standalone: true,
})
export class MainLayout {}
