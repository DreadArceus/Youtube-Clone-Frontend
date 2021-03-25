import { Component, OnInit } from '@angular/core';
import { VideoData } from '../types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  recommended_videos: VideoData[] = [
    {
      thumbnail_link:
        'https://i.ytimg.com/vi/C5V2NB5gZmo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDxcrAW7NhnGGoKfmpRa0RKtiSu_w',
      channel_link: 'https://www.youtube.com/channel/UCADuqJlXwg0Q6oK9zZ6WYlw',
      channel_logo_link:
        'https://yt3.ggpht.com/ytc/AAUvwnh0pID9S3On3ZV6TOuyiKOZ1F2VzB1s2CBnnAPPwA=s176-c-k-c0x00ffffff-no-rj',
      channel_name: ' Fandom Collective',
      video_link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      video_title: 'Emotional Persona Music Mix (Study/Work) [Official]',
      views: '2.9M views',
      upload_date: '2 years ago',
    },
  ];
  constructor() {
    this.recommended_videos = [
      ...this.recommended_videos,
      ...this.recommended_videos,
      ...this.recommended_videos,
      ...this.recommended_videos,
    ];
    this.recommended_videos = [
      ...this.recommended_videos,
      ...this.recommended_videos,
      ...this.recommended_videos,
      ...this.recommended_videos,
    ];
  }

  ngOnInit(): void {}
}
