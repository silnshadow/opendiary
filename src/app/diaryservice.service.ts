import { Injectable } from '@angular/core';
import { ChatThread, DiaryEntry } from './models/diary-entry';
import { Generator } from './helper/Generator';
import { isEmpty } from 'rxjs';
import { User } from './models/users';

@Injectable({
  providedIn: 'root',
})
export class DiaryserviceService {
  private personalDiaries: DiaryEntry[] = [];
  private chatThreads: ChatThread[] = [];
  private generator = new Generator();

  constructor() {
    
    this.personalDiaries = [
      {
        title: 'Travelling',
        description: 'This is the first time I am writing about anything',
        publishedDate: new Date('2023-09-15'),
        loggedUser: { id: '1', anonymousId: 'u-anm 1' } as User,
        threadId: this.generator.assignThread('Travelling'),
      },
      {
        title: 'Trekking',
        description: 'This is the second personal diary entry.',
        publishedDate: new Date('2023-09-16'),
        loggedUser: { id: '2', anonymousId: 'u-anm 2' } as User,
        threadId: this.generator.assignThread('thread2'),
      },
      {
        title: 'Cycling',
        description: 'This is the third personal diary entry.',
        publishedDate: new Date('2023-09-17'),
        loggedUser: { id: '3', anonymousId: 'u-anm 3' } as User,
        threadId: this.generator.assignThread('thread3'),
      },
      {
        title: 'Group trip with friends',
        description: 'This is the fourth personal diary entry.',
        publishedDate: new Date('2023-09-18'),
        loggedUser: { id: '4', anonymousId: 'u-anm 4' } as User,
        threadId: this.generator.assignThread('thread4'),
      },
      {
        title: 'Welcome to my blog',
        description:
          "We welcome contributions from the community to make OpenDiary even better. If you're interested in collaborating, please feel free to open an issue, suggest enhancements, or submit pull requests. Your contributions are highly appreciated!",
        publishedDate: new Date('2023-09-19'),
        loggedUser: { id: '5', anonymousId: 'u-anm 5' } as User,
        threadId: this.generator.assignThread('Travelling'),
      },
    ];

    // Sample data for chat threads
    this.chatThreads = [
      {
        threadId: 'thread1',
        diaryEntries: [this.personalDiaries[0], this.personalDiaries[1]],
      },
      {
        threadId: 'thread2',
        diaryEntries: [this.personalDiaries[2]],
      },
      {
        threadId: 'thread3',
        diaryEntries: [this.personalDiaries[3]],
      },
    ];
  }

  getChatThreadsForThreadId(threadId: string): DiaryEntry[] {
    const chatThread = this.chatThreads.find((thread) => thread.threadId === threadId);
  
    if (chatThread) {
      return chatThread.diaryEntries;
    }
  
    return [];
  }
  
  getPersonalDiary(): DiaryEntry[] {
    return this.personalDiaries;
  }

  getChatThreads(): ChatThread[] {
    return this.chatThreads;
  }

  addEntryInPersonalDiary(entry: DiaryEntry): void {
    if (entry) {
      this.personalDiaries.unshift(entry);
    }
  }
}
