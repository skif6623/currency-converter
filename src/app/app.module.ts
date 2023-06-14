import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { GlobalErrorComponent } from 'src/components/global-error/global-error.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, GlobalErrorComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
