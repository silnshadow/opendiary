import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalDiaryComponent } from './personal-diary/personal-diary.component';
import { TechnicalDiaryComponent } from './technical-diary/technical-diary.component';
import { HealthDiaryComponent } from './health-diary/health-diary.component';
import { WorkplaceDiaryComponent } from './workplace-diary/workplace-diary.component';

import { DiaryEntryComponent } from './diary-entry/diary-entry.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

const routes: Routes = [
  { path: '', redirectTo: '/personal', pathMatch: 'full' },
  { path: 'personal', component: PersonalDiaryComponent },
  { path: 'technical', component: TechnicalDiaryComponent },
  { path: 'health', component: HealthDiaryComponent },
  { path: 'workplace', component: WorkplaceDiaryComponent },
  { path: 'diaryentry', component: DiaryEntryComponent },
  { path: 'diaryentry/:threadId', component: DiaryEntryComponent },
  { path: 'searchbar', component: SearchBarComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
