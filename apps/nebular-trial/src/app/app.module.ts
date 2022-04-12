import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbButtonModule, NbSidebarModule, NbListModule, NbCardModule, NbMenuModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule,NbMenuModule,NbMenuModule.forRoot(),NbCardModule,NbListModule,NbSidebarModule.forRoot(),NbSidebarModule, BrowserAnimationsModule, NbThemeModule.forRoot({ name: 'default' }), NbLayoutModule, NbEvaIconsModule, AppRoutingModule,NbButtonModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
