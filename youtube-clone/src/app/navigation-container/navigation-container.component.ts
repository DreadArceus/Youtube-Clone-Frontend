import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation-container',
  templateUrl: './navigation-container.component.html',
  styleUrls: ['./navigation-container.component.css'],
})
export class NavigationContainerComponent {
  screenWidth: number = 0;
  searchView: boolean = false;
  searchBoxFocus: boolean = false;

  playlist_data: string[] = ['Sample playlist 1', 'Sample playlist 2'];
  subscription_data: string[] = ['Sample sub 1', 'Sample sub 2'];

  constructor() {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth > 740 && !this.searchBoxFocus) this.searchView = false;
  }

  onBlur() {
    if (this.screenWidth > 740) this.searchView = false;
    this.searchBoxFocus = false;
  }

  onFocus() {
    this.searchView = true;
    this.searchBoxFocus = true;
  }
}
