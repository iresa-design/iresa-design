import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { distinctUntilChanged, map, startWith } from 'rxjs/operators';
import { Collapse, ScrollSpy } from 'bootstrap';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageComponent implements OnInit, AfterViewInit {

  @ViewChild('navCollapse') navCollapseRef!: ElementRef;

  currYear = new Date().getFullYear();

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

  ngAfterViewInit() {
    this.addScrollSpy();
  }


  addScrollSpy() {
    new ScrollSpy(document.body, {
      target: '#mainNav', offset: 80
    })
  }

  navItemClick() {
    const show = this.navCollapseRef.nativeElement.className.includes('show');
    show ? new Collapse(this.navCollapseRef.nativeElement).toggle() : undefined;
  }

}
