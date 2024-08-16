import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  selectedImage = "assets/images/product-1.jpeg";
  items = ["assets/images/product-1.jpeg",
    "assets/images/product-2.jpeg",
    "assets/images/product-3.jpeg",
    "assets/images/product-4.jpeg",
    "assets/images/product-5.jpeg",
    "assets/images/product-6.jpeg",
    "assets/images/product-7.jpeg",
  ];

  selectImage(imageIndex: number) {
    this.selectedImage = this.items[imageIndex];
  }
}
