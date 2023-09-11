import { Injectable } from '@angular/core';
import { DiaryEntry } from './models/diary-entry';

@Injectable({
  providedIn: 'root'
})
export class DiaryserviceService {
  personalDiaries: DiaryEntry[] = [];
  constructor() { }

  getPersonalDiary(): DiaryEntry[] {
   this.personalDiaries = [
      {
        title: 'Entry 1',
        description: 'This is the first time I am writing about anything',
        publishedDate: new Date('2023-09-15'),
      },
      {
        title: 'Entry 2',
        description: 'This is the second personal diary entry.',
        publishedDate: new Date('2023-09-16'),
      },
      {
        title: 'Entry 3',
        description: 'This is the third personal diary entry.',
        publishedDate: new Date('2023-09-17'),
      },
      {
        title: 'Entry 4',
        description: 'This is the fourth personal diary entry.',
        publishedDate: new Date('2023-09-18'),
      },
      {
        title: 'Entry 5',
        description: 'This is the fifth personal diary entry.',
        publishedDate: new Date('2023-09-19'),
      },
    ];
  
    return this.personalDiaries;
  }

  addEntryInPersonalDiary(entry : DiaryEntry): void{
    if(DiaryEntry){
      this.personalDiaries.push(entry);
    }

  }
}
