import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioComponent implements OnInit {

  portfolioList = [
    {src: 'assets/img/portfolio/cabin.png', alt: 'cabin'},
    {src: 'assets/img/portfolio/cake.png', alt: 'cake'},
    {src: 'assets/img/portfolio/circus.png', alt: 'circus'},
    {src: 'assets/img/portfolio/game.png', alt: 'game'},
    {src: 'assets/img/portfolio/safe.png', alt: 'safe'},
    {src: 'assets/img/portfolio/submarine.png', alt: 'submarine'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
