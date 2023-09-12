import { Injectable } from '@angular/core';
import { DiaryEntry } from './models/diary-entry';
import { User } from './models/users';

@Injectable({
  providedIn: 'root'
})

export class DiaryserviceService {
  private personalDiaries: DiaryEntry[] = [];

  constructor() {
    this.personalDiaries = [
      {
        title: 'thread1',
        description: 'This is the first time I am writing about anything',
        publishedDate: new Date('2023-09-15'),
        loggedUser: { id: '1', anonmyusId: 'u-anm 1' } as User,
      },
      {
        title: 'thread2',
        description: 'This is the second personal diary entry.',
        publishedDate: new Date('2023-09-16'),
        loggedUser: { id: '2', anonmyusId: 'u-anm 2' } as User,
      },
      {
        title: 'thread3',
        description: 'This is the third personal diary entry.',
        publishedDate: new Date('2023-09-17'),
        loggedUser: { id: '3', anonmyusId: 'u-anm 3' } as User,
      },
      {
        title: 'thread4',
        description: 'This is the fourth personal diary entry.',
        publishedDate: new Date('2023-09-18'),
        loggedUser: { id: '4', anonmyusId: 'u-anm 4' } as User,
      },
      {
        title: 'thread5',
        description: "We welcome contributions from the community to make OpenDiary even better. If you're interested in collaborating, please feel free to open an issue, suggest enhancements, or submit pull requests. Your contributions are highly appreciated!",
        publishedDate: new Date('2023-09-19'),
        loggedUser: { id: '5', anonmyusId: 'u-anm 5' } as User,
      },
    ];
  }

  getPersonalDiary(): DiaryEntry[] {
    return this.personalDiaries;
  }

  addEntryInPersonalDiary(entry: DiaryEntry): void {
    if (entry) {
      this.personalDiaries.unshift(entry);
    }
  }
}
