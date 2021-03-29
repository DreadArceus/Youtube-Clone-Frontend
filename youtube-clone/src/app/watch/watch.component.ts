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
    description: `[❤️] ‒ Discord: https://discord.gg/q2AA6GtU5a​
    [🐦] ‒ Socials: https://cutt.ly/SkzizIP​
    
    
    [▶️] ‒ Huge thanks to Atlus:
    Twitter (West): https://twitter.com/atlus_west?lang=cs​
    Twitter (Japan): https://twitter.com/Atlus_jp​
    Website: https://atlus.com/​
    Youtube(West): @Official ATLUS West 
    Youtube(Japan): @atlustube
    
    ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 
    
    [📘] Thumbnail: 
    ― Artist: しょくむら
    ― Picture: https://www.pixiv.net/en/artworks/644...​ 
    
    [💜] Channel Art by Tigera:
    Tumblr: https://ir-dr.tumblr.com​
    Store: https://projecttiger.bigcartel.com​
    Twitter: https://twitter.com/projecttiger_​
    
    [📕] Timestamps:
    [00:00​] Heartbeat ,Heartbreak (p4d)
    ― Artist: ごり
    ― Picture: https://goo.gl/6Fy6tU​
    [03:45​] Deep Breath Deep Breath
    ― Artist: スオウ
    ― Picture: https://goo.gl/QqA3zz​
    [08:11​] Signs of love
    ― Artist: ni-nya
    ― Picture: https://goo.gl/vmQXp4​
    [11:02​] Memories of You― Picture
    ― Artist: STAR影法師
    ― Picture: https://goo.gl/9swPqA​
    [16:23​] Heaven
    ― Artist: ごり
    ― Picture: https://goo.gl/EsMVGZ​
    [19:07​] Heartful Cry 
    ― Artist: しょくむら
    ― Picture: https://www.pixiv.net/en/artworks/564...​
    [22:51​] Last Suprise
    ― Artist: キヨミヤ
    ― Picture: https://goo.gl/TFue6n​
    [26:36​] Your Affection
    ― Artist: ♣3
    ― Picture: https://goo.gl/PvrVPP​
    [30:36​] Never more
    ― Artist: ごり
    ― Picture: https://goo.gl/avMCiM​
    [36:56​] Snowflake
    ― Artist: ♣3
    ― Picture: https://goo.gl/9nTtWm​
    [41:09​] Wiping All Out
    ― Artist: en
    ― Picture: https://goo.gl/x11S6h​
    [43:41​] Blues in Velvet Room
    ― Artist: RON
    ― Picture: Deleted by artist :/  https://www.pixiv.net/en/users/124988...​
    [46:43​] Burn my dread
    ― Artist: しがらき
    ― Picture: https://goo.gl/Q1rKpf​
    [48:12​] Blind Alley
    ― Artist: 35
    ― Picture: https://goo.gl/QqKxaC​
    [50:39​] Way of life
    ― Artist: ec
    ― Picture: https://goo.gl/CqaJD2​
    [52:53​] Life will change
    ― Artist: sakimichan
    ― Picture: https://goo.gl/duvtq5​
    [55:19​] Pursuing my true self
    ― Artist: スオウ
    ― Picture: https://goo.gl/BUH4sh​
    [56:40​] Beneath the mask
    ― Artist: yooani
    ― Picture: https://goo.gl/VPeDhA​
    [01:01:06​] Dance!
    ― Artist: オタマイル
    ― Picture: https://goo.gl/cpquG7​
    [01:04:30​] Specialist
    ― Artist: すだこ
    ― Picture: https://goo.gl/uk7AK7​
    [1:06:35​] Have a short rest
    ― Artist: キヨミヤ
    ― Picture: https://goo.gl/YUr8rX​
    [1:08:38​] Shadow world
    ― Artist: RON
    ― Picture: https://goo.gl/D9w9zm​
    [1:13:07​] Want to be close
    ― Artist: ニコン
    ― Picture: https://goo.gl/PrSM4J​
    [1:17:45​] Traumerei
    ― Artist: 35
    ― Picture: https://goo.gl/zndLjK​
    [1:19:52​] Changing Seasons
    ― Artist: えもみん
    ― Picture: https://goo.gl/xmFY7r​
    [1:22:49​] Wake up, Get up, Get out there
    ― Artist: 神子
    ― Picture: https://goo.gl/6ofLoa​
    [1:25:33​] When the Moon Reaches for the Stars
    ― Artist: しょくむら
    ― Picture: https://goo.gl/6HBdUx​
    [1:27:53​] Like a dream come true
    ― Artist: Hullabaloo
    ― Picture: https://goo.gl/WG1fkw​
    [1:30:19​] Mayas theme
    ― Artist: セロリ
    ― Picture: https://goo.gl/LzPvam​
    [1:33:06​] Our Beginning
    ― Artist: ちーず子
    ― Picture: https://goo.gl/7bJgqq​
    [1:35:03​] Living with determination
    ― Artist: JNTHED
    ― Picture: https://goo.gl/XrdTDp​
    [1:38:01​] Butterfly Kiss
    ― Artist: ペコー
    ― Picture: https://goo.gl/MJiRxU​
    [1:40:18​] Time
    ― Artist: Shrie
    ― Picture: https://goo.gl/t5o7vD​
    [1:42:46​] Smile
    ― Artist: オトフケ
    ― Picture: https://goo.gl/FsL8tL​
    [1:45:58​] Joy
    ― Artist: ジョカ
    ― Picture: https://goo.gl/yhp9aK​
    [1:48:35​] Tender Feeling
    ― Artist: ハラダミユキ
    ― Picture: https://goo.gl/TqmskM​
    [1:50:31​] Break it down
    ― Artist: 村カルキ
    ― Picture: https://goo.gl/7nuStR​
    [1:52:08​] Sunset bridge
    ― Artist: りゅうせー
    ― Picture: https://goo.gl/5QmZPM​
    [1:53:46​] New Days
    ― Artist: 燐人(りんど)
    ― Picture: https://goo.gl/cw6oAq​
    [1:55:08​] Step
    ― Artist: イリヤ
    ― Picture: https://goo.gl/Q42Jq7​
    [1:56:45​] Memories of school
    ― Artist: 岸和田
    ― Picture: https://goo.gl/ML2joP​
    [1:58:28​] Confession / Secret
    ― Artist: よん＠6月案件募集
    ― Picture: https://goo.gl/7aNkHk​
    [2:00:50​] Memory
    ― Artist: ♣3
    ― Picture: https://goo.gl/CCTXrR​
    [2:03:58​] The days when my mother was there
    ― Artist: vafar7
    ― Picture: https://goo.gl/LdNmyU​
    [2:07:48​] Mistic
    ― Artist: しょくむら
    ― Picture: https://goo.gl/d47xbm​
    [2:09:20​] Layer Cake
    ― Artist: 松竜
    ― Picture: https://goo.gl/weVYwH​
    [2:11:42​] Fes - Opening
    ― Artist: ♣3
    ― Picture: https://goo.gl/KCWSV7​
    [2:13:11​] Tokyo Daylight
    ― Artist: ♣3
    ― Picture: https://goo.gl/J7FX3Q​
    [2:15:08​] Sky Full of Stars
    ― Artist: ♣3
    ― Picture: https://goo.gl/g35fcf​
    [2:17:50​] Period
    ― Artist: 斉藤ロクロ
    ― Picture: https://goo.gl/YFR41e​
    [2:18:54​] My homie
    ― Artist: ♣3
    ― Picture: https://goo.gl/QSSnKj​
    [2:20:57​] Seal
    ― Artist: RON
    ― Picture: https://goo.gl/K2gi9w​
    [2:22:52​] Sweet
    ― Artist: やまかわ
    ― Picture: https://goo.gl/Y5fFUq​
    
    ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 
    
    Hashtags:
    #FandomCollective​ #Persona​  #RelaxingMusic​
    
    ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 
    
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
