import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-navigation',
  templateUrl: './quick-navigation.component.html',
  styleUrls: ['./quick-navigation.component.css'],
})
export class QuickNavigationComponent implements OnInit {
  screenWidth: number;
  constructor() {
    this.screenWidth = window.innerWidth;
  }

  ngOnInit(): void {}

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
  }
}
