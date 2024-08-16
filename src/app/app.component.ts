import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './core/home/home.component';
import { FooterComponent } from './core/footer/footer.component';
import { ContactHomepageComponent } from './features/contact-homepage/contact-homepage.component';
import { NavbarComponent } from "./core/navbar/navbar.component";
import { ScrollToTopComponent } from './core/scroll-to-top/scroll-to-top.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, HeaderComponent,
    HomeComponent, FooterComponent,
    ContactHomepageComponent, NavbarComponent,
    ScrollToTopComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'linen';
}
