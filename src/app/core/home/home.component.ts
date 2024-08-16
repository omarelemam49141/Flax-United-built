import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { GalleryComponent } from '../../features/gallery/gallery.component';
import { VideosComponent } from '../../features/videos/videos.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AboutComponent, GalleryComponent, VideosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  carouselTimer = 3000;
  images = [
    "assets/images/product-1.jpeg",
    "assets/images/product-6.jpeg",
    "assets/images/product-7.jpeg"
  ]
}
