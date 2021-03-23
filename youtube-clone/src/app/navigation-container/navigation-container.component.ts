import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navigation-container',
  templateUrl: './navigation-container.component.html',
  styleUrls: ['./navigation-container.component.css'],
})
export class NavigationContainerComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  playlist_data: string[] = ['Sample playlist 1', 'Sample playlist 2'];
  subscription_data: string[] = ['Sample sub 1', 'Sample sub 2'];

  constructor(private breakpointObserver: BreakpointObserver) {}
}
