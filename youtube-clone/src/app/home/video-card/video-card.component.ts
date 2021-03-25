import { Component, Input, OnInit } from '@angular/core';
import { VideoData } from 'src/app/types';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.css'],
})
export class VideoCardComponent implements OnInit {
  @Input('data') data: VideoData = {
    thumbnail_link: '',
    channel_link: '',
    channel_logo_link: '',
    channel_name: '',
    video_link: '',
    video_title: '',
    views: '',
    upload_date: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
