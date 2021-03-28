import { Component, Input, OnInit } from '@angular/core';
import { VideoData } from 'src/app/types';

@Component({
  selector: 'app-side-video-card',
  templateUrl: './side-video-card.component.html',
  styleUrls: ['./side-video-card.component.css'],
})
export class SideVideoCardComponent implements OnInit {
  @Input() videoData: VideoData = {
    thumbnail_link:
      'https://i.ytimg.com/vi/C5V2NB5gZmo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDxcrAW7NhnGGoKfmpRa0RKtiSu_w',
    channel_link: '',
    channel_logo_link: '',
    channel_name: ' --------',
    video_link: '',
    video_title: 'DATA NOT FOUND',
    views: 'xxx views',
    upload_date: 'x years ago',
  };

  constructor() {}

  ngOnInit(): void {}
}
