import { ChangeDetectionStrategy, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {Collapse} from 'bootstrap';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageComponent implements OnInit {

  @ViewChild('mainNav') mainNavRef!: ElementRef;
  @ViewChild('navCollapse') navCollapseRef!: ElementRef;

  onScroll$ = new Observable();

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.onScroll();
  }

  onScroll() {
    this.onScroll$ = fromEvent(window, 'scroll').pipe(
      tap(_ => this.updateEl())
    );
  }

  updateEl() {
    this.updateMainNav();
  }

  updateMainNav() {
    const offsetTop = window.pageYOffset + this.mainNavRef.nativeElement.getBoundingClientRect().top;
    offsetTop > 100 ? this.renderer.addClass(this.mainNavRef.nativeElement, 'navbar-shrink') : this.renderer.removeClass(this.mainNavRef.nativeElement, 'navbar-shrink');
  }

  navItemClick() {
    new Collapse(this.navCollapseRef.nativeElement).toggle();
  }

}
