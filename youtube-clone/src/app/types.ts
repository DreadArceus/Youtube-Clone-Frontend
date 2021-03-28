export type VideoData = {
  thumbnail_link: string;
  channel_link: string;
  channel_logo_link: string;
  channel_name: string;
  video_link: string;
  video_title: string;
  views: string;
  upload_date: string;
};

export type ActiveVideoData = {
  thumbnail_link: string;
  channel_link: string;
  channel_logo_link: string;
  channel_name: string;
  channel_sub_count: string;
  video_link: string;
  video_title: string;
  views: string;
  exact_views: string;
  exact_upload_date: string;
  likes: string;
  dislikes: string;
  description: string;
  comments: VideoComment[];
};

export type VideoComment = {
  message: string;
  username: string;
  user_display_picture: string;
  upload_date: string;
  likes: string;
  replies: VideoComment[];
}
