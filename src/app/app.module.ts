import { AppComponent } from './app.component';

import { ParticlesModule } from 'angular-particle';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParticlesComponent } from './particles/particles.component';
import { PanelComponent } from './panel/panel.component';
import { HeaderAnimationComponent } from './header-animation/header-animation.component';


@NgModule({
  declarations: [
    AppComponent,
    ParticlesComponent,
    PanelComponent,
    HeaderAnimationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ParticlesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
