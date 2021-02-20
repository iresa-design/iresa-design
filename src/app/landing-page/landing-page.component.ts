import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { distinctUntilChanged, map, startWith, tap } from 'rxjs/operators';
import { Collapse } from 'bootstrap';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageComponent implements OnInit {

  @ViewChild('navCollapse') navCollapseRef!: ElementRef;

  constructor() { }

  get onScroll$(): Observable<Event> {
    return fromEvent(window, 'scroll');
  }

  get overOffsetTop$(): Observable<boolean> {
    return this.onScroll$.pipe(
      startWith(false),
      map(_ => window.pageYOffset > 100),
      distinctUntilChanged()
    )
  }

  ngOnInit(): void { }



  navItemClick() {
    new Collapse(this.navCollapseRef.nativeElement).toggle();
  }

}
