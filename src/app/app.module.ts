import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { GlobalErrorComponent } from 'src/components/global-error/global-error.component';
import { FormsModule } from '@angular/forms';
import { FilterIdeasPipe } from './pipes/filter-ideas.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { CreateIdeaComponent } from './components/create-idea/create-idea.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GlobalErrorComponent,
    FilterIdeasPipe,
    ModalComponent,
    CreateIdeaComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
