import { Component, HostListener, OnInit } from '@angular/core';
import { ActiveVideoData, VideoComment, VideoData } from '../types';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css'],
})
export class WatchComponent implements OnInit {
  active_video: ActiveVideoData = {
    thumbnail_link:
      'https://i.ytimg.com/vi/C5V2NB5gZmo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDxcrAW7NhnGGoKfmpRa0RKtiSu_w',
    channel_link: 'https://www.youtube.com/channel/UCADuqJlXwg0Q6oK9zZ6WYlw',
    channel_logo_link:
      'https://yt3.ggpht.com/ytc/AAUvwnh0pID9S3On3ZV6TOuyiKOZ1F2VzB1s2CBnnAPPwA=s176-c-k-c0x00ffffff-no-rj',
    channel_name: ' Fandom Collective',
    channel_sub_count: '34.7K',
    video_link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    video_title: 'Emotional Persona Music Mix (Study/Work) [Official]',
    views: '2.9M',
    exact_views: '2,965,088 views',
    exact_upload_date: 'Nov 9, 2018',
    likes: '50K',
    dislikes: '467',
    description: `[โค๏ธ] โ Discord: https://discord.gg/q2AA6GtU5aโ
    [๐ฆ] โ Socials: https://cutt.ly/SkzizIPโ
    
    
    [โถ๏ธ] โ Huge thanks to Atlus:
    Twitter (West): https://twitter.com/atlus_west?lang=csโ
    Twitter (Japan): https://twitter.com/Atlus_jpโ
    Website: https://atlus.com/โ
    Youtube(West): @Official ATLUS West 
    Youtube(Japan): @atlustube
    
    โ โ โ โ โ โ โ โ โ โ โ โ โ โ โ โ โ โ โ โ 
    
    [๐] Thumbnail: 
    โ Artist: ใใใใใ
    โ Picture: https://www.pixiv.net/en/artworks/644...โ 
    
    [๐] Channel Art by Tigera:
    Tumblr: https://ir-dr.tumblr.comโ
    Store: https://projecttiger.bigcartel.comโ
    Twitter: https://twitter.com/projecttiger_โ
    
    [๐] Timestamps:
    [00:00โ] Heartbeat ,Heartbreak (p4d)
    โ Artist: ใใ
    โ Picture: https://goo.gl/6Fy6tUโ
    [03:45โ] Deep Breath Deep Breath
    โ Artist: ในใชใฆ
    โ Picture: https://goo.gl/QqA3zzโ
    [08:11โ] Signs of love
    โ Artist: ni-nya
    โ Picture: https://goo.gl/vmQXp4โ
    [11:02โ] Memories of Youโ Picture
    โ Artist: STARๅฝฑๆณๅธซ
    โ Picture: https://goo.gl/9swPqAโ
    [16:23โ] Heaven
    โ Artist: ใใ
    โ Picture: https://goo.gl/EsMVGZโ
    [19:07โ] Heartful Cry 
    โ Artist: ใใใใใ
    โ Picture: https://www.pixiv.net/en/artworks/564...โ
    [22:51โ] Last Suprise
    โ Artist: ใญใจใใค
    โ Picture: https://goo.gl/TFue6nโ
    [26:36โ] Your Affection
    โ Artist: โฃ3
    โ Picture: https://goo.gl/PvrVPPโ
    [30:36โ] Never more
    โ Artist: ใใ
    โ Picture: https://goo.gl/avMCiMโ
    [36:56โ] Snowflake
    โ Artist: โฃ3
    โ Picture: https://goo.gl/9nTtWmโ
    [41:09โ] Wiping All Out
    โ Artist: en
    โ Picture: https://goo.gl/x11S6hโ
    [43:41โ] Blues in Velvet Room
    โ Artist: RON
    โ Picture: Deleted by artist :/  https://www.pixiv.net/en/users/124988...โ
    [46:43โ] Burn my dread
    โ Artist: ใใใใ
    โ Picture: https://goo.gl/Q1rKpfโ
    [48:12โ] Blind Alley
    โ Artist: 35
    โ Picture: https://goo.gl/QqKxaCโ
    [50:39โ] Way of life
    โ Artist: ec
    โ Picture: https://goo.gl/CqaJD2โ
    [52:53โ] Life will change
    โ Artist: sakimichan
    โ Picture: https://goo.gl/duvtq5โ
    [55:19โ] Pursuing my true self
    โ Artist: ในใชใฆ
    โ Picture: https://goo.gl/BUH4shโ
    [56:40โ] Beneath the mask
    โ Artist: yooani
    โ Picture: https://goo.gl/VPeDhAโ
    [01:01:06โ] Dance!
    โ Artist: ใชใฟใใคใซ
    โ Picture: https://goo.gl/cpquG7โ
    [01:04:30โ] Specialist
    โ Artist: ใใ?ใ
    โ Picture: https://goo.gl/uk7AK7โ
    [1:06:35โ] Have a short rest
    โ Artist: ใญใจใใค
    โ Picture: https://goo.gl/YUr8rXโ
    [1:08:38โ] Shadow world
    โ Artist: RON
    โ Picture: https://goo.gl/D9w9zmโ
    [1:13:07โ] Want to be close
    โ Artist: ใใณใณ
    โ Picture: https://goo.gl/PrSM4Jโ
    [1:17:45โ] Traumerei
    โ Artist: 35
    โ Picture: https://goo.gl/zndLjKโ
    [1:19:52โ] Changing Seasons
    โ Artist: ใใใฟใ
    โ Picture: https://goo.gl/xmFY7rโ
    [1:22:49โ] Wake up, Get up, Get out there
    โ Artist: ็ฅๅญ
    โ Picture: https://goo.gl/6ofLoaโ
    [1:25:33โ] When the Moon Reaches for the Stars
    โ Artist: ใใใใใ
    โ Picture: https://goo.gl/6HBdUxโ
    [1:27:53โ] Like a dream come true
    โ Artist: Hullabaloo
    โ Picture: https://goo.gl/WG1fkwโ
    [1:30:19โ] Mayas theme
    โ Artist: ใปใญใช
    โ Picture: https://goo.gl/LzPvamโ
    [1:33:06โ] Our Beginning
    โ Artist: ใกใผใๅญ
    โ Picture: https://goo.gl/7bJgqqโ
    [1:35:03โ] Living with determination
    โ Artist: JNTHED
    โ Picture: https://goo.gl/XrdTDpโ
    [1:38:01โ] Butterfly Kiss
    โ Artist: ใใณใผ
    โ Picture: https://goo.gl/MJiRxUโ
    [1:40:18โ] Time
    โ Artist: Shrie
    โ Picture: https://goo.gl/t5o7vDโ
    [1:42:46โ] Smile
    โ Artist: ใชใใใฑ
    โ Picture: https://goo.gl/FsL8tLโ
    [1:45:58โ] Joy
    โ Artist: ใธใงใซ
    โ Picture: https://goo.gl/yhp9aKโ
    [1:48:35โ] Tender Feeling
    โ Artist: ใใฉใใใฆใญ
    โ Picture: https://goo.gl/TqmskMโ
    [1:50:31โ] Break it down
    โ Artist: ๆใซใซใญ
    โ Picture: https://goo.gl/7nuStRโ
    [1:52:08โ] Sunset bridge
    โ Artist: ใใใใใผ
    โ Picture: https://goo.gl/5QmZPMโ
    [1:53:46โ] New Days
    โ Artist: ็ไบบ(ใใใฉ)
    โ Picture: https://goo.gl/cw6oAqโ
    [1:55:08โ] Step
    โ Artist: ใคใชใค
    โ Picture: https://goo.gl/Q42Jq7โ
    [1:56:45โ] Memories of school
    โ Artist: ๅฒธๅ็ฐ
    โ Picture: https://goo.gl/ML2joPโ
    [1:58:28โ] Confession / Secret
    โ Artist: ใใ๏ผ?6ๆๆกไปถๅ้
    โ Picture: https://goo.gl/7aNkHkโ
    [2:00:50โ] Memory
    โ Artist: โฃ3
    โ Picture: https://goo.gl/CCTXrRโ
    [2:03:58โ] The days when my mother was there
    โ Artist: vafar7
    โ Picture: https://goo.gl/LdNmyUโ
    [2:07:48โ] Mistic
    โ Artist: ใใใใใ
    โ Picture: https://goo.gl/d47xbmโ
    [2:09:20โ] Layer Cake
    โ Artist: ๆพ็ซ
    โ Picture: https://goo.gl/weVYwHโ
    [2:11:42โ] Fes - Opening
    โ Artist: โฃ3
    โ Picture: https://goo.gl/KCWSV7โ
    [2:13:11โ] Tokyo Daylight
    โ Artist: โฃ3
    โ Picture: https://goo.gl/J7FX3Qโ
    [2:15:08โ] Sky Full of Stars
    โ Artist: โฃ3
    โ Picture: https://goo.gl/g35fcfโ
    [2:17:50โ] Period
    โ Artist: ๆ่คใญใฏใญ
    โ Picture: https://goo.gl/YFR41eโ
    [2:18:54โ] My homie
    โ Artist: โฃ3
    โ Picture: https://goo.gl/QSSnKjโ
    [2:20:57โ] Seal
    โ Artist: RON
    โ Picture: https://goo.gl/K2gi9wโ
    [2:22:52โ] Sweet
    โ Artist: ใใพใใ
    โ Picture: https://goo.gl/Y5fFUqโ
    
    โ โ โ โ โ โ โ โ โ โ โ โ โ โ โ โ โ โ โ โ 
    
    Hashtags:
    #FandomCollectiveโ #Personaโ  #RelaxingMusicโ
    
    โ โ โ โ โ โ โ โ โ โ โ โ โ โ โ โ โ โ โ โ 
    
    All audio and visual content featured in our videos is either made by us, or we have the necessary permission to use it.`,
    comments: [
      {
        username: 'Someone Else',
        message: 'Really liked the video :kappa:',
        likes: '69',
        replies: [
          {
            username: 'Someone Else',
            message: 'I believe you :kappa:',
            likes: '420',
            replies: [],
            upload_date: '37 minutes ago',
            user_display_picture:
              'https://i.pinimg.com/originals/6f/fc/1f/6ffc1f4eef25a6af011ac1d8e1f19861.png',
          },
        ],
        upload_date: '11 years ago',
        user_display_picture:
          'https://i.pinimg.com/originals/6f/fc/1f/6ffc1f4eef25a6af011ac1d8e1f19861.png',
      },
    ],
  };
  side_videos: VideoData[] = [
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

  processed_description: string[] = [];
  screenWidth: number = 0;
  videoWidth: number = 0;
  sideCardWidth: number = 0;
  expandDescription: boolean = false;
  subscribed: boolean = false;
  liked: boolean = false;
  disliked: boolean = false;

  newCommentMessage: string = '';

  constructor() {
    this.processed_description = this.active_video.description.split('\n');
    this.side_videos = [
      ...this.side_videos,
      ...this.side_videos,
      ...this.side_videos,
      ...this.side_videos,
    ];
    this.side_videos = [
      ...this.side_videos,
      ...this.side_videos,
      ...this.side_videos,
      ...this.side_videos,
    ];
    this.active_video.comments = [
      ...this.active_video.comments,
      ...this.active_video.comments,
      ...this.active_video.comments,
      ...this.active_video.comments,
    ];
    this.active_video.comments = [
      ...this.active_video.comments,
      ...this.active_video.comments,
      ...this.active_video.comments,
      ...this.active_video.comments,
    ];
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 540) {
      this.videoWidth = (97 * 540) / 100 - (540 - this.screenWidth);
    } else if (this.screenWidth <= 1080) {
      this.videoWidth = (93 * 1080) / 100 - (1080 - this.screenWidth);
      this.sideCardWidth = 550 - (1225 - 1080);
    } else if (this.screenWidth <= 1225) {
      this.sideCardWidth = 550 - (1225 - this.screenWidth);
      this.videoWidth = (72 * 1920) / 100 - (1920 - 1225);
    } else {
      this.videoWidth = (72 * 1920) / 100 - (1920 - this.screenWidth);
      this.sideCardWidth = 550;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 540) {
      this.videoWidth = (97 * 540) / 100 - (540 - this.screenWidth);
    } else if (this.screenWidth <= 1080) {
      this.videoWidth = (93 * 1080) / 100 - (1080 - this.screenWidth);
    } else if (this.screenWidth <= 1225) {
      this.sideCardWidth = 550 - (1225 - this.screenWidth);
      this.videoWidth = (72 * 1920) / 100 - (1920 - 1225);
    } else {
      this.videoWidth = (72 * 1920) / 100 - (1920 - this.screenWidth);
    }
  }

  ngOnInit(): void {}

  getDescription() {
    if (this.expandDescription) {
      return this.processed_description;
    }
    return this.processed_description.slice(0, 3);
  }

  newComment() {
    const comment = {
      username: 'You Smile',
      message: this.newCommentMessage,
      likes: '0',
      replies: [],
      upload_date: 'a few seconds ago',
      user_display_picture:
        'https://yt3.ggpht.com/yti/ANoDKi5Gp_Rq4FdAu--YygXks57IySOThvW5u1M8KgUC7Q=s88-c-k-c0x00ffffff-no-rj',
    };
    this.active_video.comments = [comment, ...this.active_video.comments];
    this.newCommentMessage = '';
  }

  likeComment() {
    this.liked = !this.liked;
    if (this.disliked) {
      this.disliked = false;
      this.active_video.dislikes = String(
        parseInt(this.active_video.dislikes) - 1
      );
    }
  }

  dislikeComment() {
    if (this.disliked) {
      this.disliked = false;
      this.active_video.dislikes = String(
        parseInt(this.active_video.dislikes) - 1
      );
    } else {
      this.disliked = true;
      this.active_video.dislikes = String(
        parseInt(this.active_video.dislikes) + 1
      );
    }
    this.liked = false;
  }
}
