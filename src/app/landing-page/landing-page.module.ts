import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [LandingPageComponent, AboutComponent, PortfolioComponent, ContactComponent, FooterComponent, HeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [LandingPageComponent]
})
export class LandingPageModule { }