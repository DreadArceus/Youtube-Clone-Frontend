import { Component, Input, OnInit } from '@angular/core';
import { VideoComment } from 'src/app/types';

@Component({
  selector: 'app-video-comment',
  templateUrl: './video-comment.component.html',
  styleUrls: ['./video-comment.component.css'],
})
export class VideoCommentComponent implements OnInit {
  @Input() data: VideoComment = {
    username: 'Not Found',
    message: 'not-found',
    likes: 'x',
    replies: [],
    upload_date: 'x years ago',
    user_display_picture: '',
  };
  @Input() reply: boolean = false;
  showReplies: boolean = false;
  liked: boolean = false;
  disliked: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  likeComment() {
    if (this.liked) {
      this.liked = false;
      this.data.likes = String(parseInt(this.data.likes) - 1);
    } else {
      this.liked = true;
      this.data.likes = String(parseInt(this.data.likes) + 1);
    }
    this.disliked = false;
  }

  dislikeComment() {
    this.disliked = !this.disliked;
    if (this.liked) {
      this.liked = false;
      this.data.likes = String(parseInt(this.data.likes) - 1);
    }
  }
}
