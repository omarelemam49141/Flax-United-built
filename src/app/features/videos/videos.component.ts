import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss'
})
export class VideosComponent implements OnInit {  
  videoPlayer?: HTMLVideoElement;
  videos = [
    {
      thumb : "assets/images/product-1.jpeg",
      videoLink : "assets/videos/video-1.mp4",
      title : "Flax United",
      desciption: "Flax United Import and Export is a distinguished leader in the global linen industry, proudly representing Egypt as the sole company dedicated to producing and exporting premium linen products"
    },
    {
      thumb : "assets/images/product-6.jpeg",
      videoLink : "assets/videos/video-2.mp4",
      title : "Flax United",
      desciption: "Flax United Import and Export is a distinguished leader in the global linen industry, proudly representing Egypt as the sole company dedicated to producing and exporting premium linen products"
    },
    {
      thumb : "assets/images/product-7.jpeg",
      videoLink : "assets/videos/video-3.mp4",
      title : "Flax United",
      desciption: "Flax United Import and Export is a distinguished leader in the global linen industry, proudly representing Egypt as the sole company dedicated to producing and exporting premium linen products"
    }
  ]

  selectedVideo = "";

  ngOnInit(): void {
    const modal = document.getElementById('videoModal');
    
    modal?.addEventListener('shown.bs.modal', () => {
      this.playVideo();
    });

    modal?.addEventListener('hidden.bs.modal', () => {
      this.pauseVideo();
    });
  }

  selectVideo(video: string, videoPlayer: HTMLVideoElement) {
    this.selectedVideo = video;
    this.videoPlayer = videoPlayer;
  }

  playVideo() {
    this.videoPlayer?.play();
  }

  pauseVideo() {
    console.log("pausing video", this.videoPlayer);
    this.videoPlayer?.pause();
  }
}
