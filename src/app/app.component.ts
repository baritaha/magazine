import { Component } from '@angular/core';
import { MagazineBrowserComponent } from './pages/magazine-browser/magazine-browser.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MagazineBrowserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
