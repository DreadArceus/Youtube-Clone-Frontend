import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NavigationContainerComponent } from './navigation-container/navigation-container.component';
import { QuickNavigationComponent } from './quick-navigation/quick-navigation.component';
import { HomeComponent } from './home/home.component';
import { VideoCardComponent } from './home/video-card/video-card.component';
import { WatchComponent } from './watch/watch.component';
import { VideoPlayerComponent } from './watch/video-player/video-player.component';
import { SideVideoCardComponent } from './watch/side-video-card/side-video-card.component';
import { VideoCommentComponent } from './watch/video-comment/video-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationContainerComponent,
    QuickNavigationComponent,
    HomeComponent,
    VideoCardComponent,
    WatchComponent,
    VideoPlayerComponent,
    SideVideoCardComponent,
    VideoCommentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
