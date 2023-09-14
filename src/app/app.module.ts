import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiaryEntryComponent } from './diary-entry/diary-entry.component';
import { PersonalDiaryComponent } from './personal-diary/personal-diary.component';
import { TechnicalDiaryComponent } from './technical-diary/technical-diary.component';
import { HealthDiaryComponent } from './health-diary/health-diary.component';
import { WorkplaceDiaryComponent } from './workplace-diary/workplace-diary.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    DiaryEntryComponent,
    PersonalDiaryComponent,
    TechnicalDiaryComponent,
    HealthDiaryComponent,
    WorkplaceDiaryComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
