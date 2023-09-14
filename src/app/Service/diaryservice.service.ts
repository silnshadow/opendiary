import { Injectable } from '@angular/core';
import { ChatThread, DiaryEntry } from '../models/diary-entry';
import { Generator } from '../helper/Generator';
import { isEmpty } from 'rxjs';
import { User } from '../models/users';

@Injectable({
  providedIn: 'root',
})
export class DiaryserviceService {
  private personalDiaries: DiaryEntry[] = [];
  private chatThreads: ChatThread[] = [];
  private generator = new Generator();

  generateRandomDiaryEntry(): DiaryEntry {
    const randomTitle = `Entry ${Math.floor(Math.random() * 100)}`;
    const randomDescription = `Description for ${randomTitle}`;
    const randomPublishedDate = new Date(
      Date.now() - Math.floor(Math.random() * 1000000000)
    );
    const randomUser: User = {
      id: `${Math.floor(Math.random() * 10)}`,
      anonymousId: `u-anm ${Math.floor(Math.random() * 10)}`,
    };
  
    return {
      loggedUser: randomUser,
      title: randomTitle,
      description: randomDescription,
      publishedDate: randomPublishedDate,
      threadId: this.generator.generateRandomThreadId(),
    };
  }
  
  generateRandomChatThread(): ChatThread {
    const randomThreadId = this.generator.generateRandomThreadId();
    const randomDiaryEntries: DiaryEntry[] = [];
  
    const numEntries = Math.floor(Math.random() * 5) + 1;
  
    for (let i = 0; i < numEntries; i++) {
      randomDiaryEntries.push(this.generateRandomDiaryEntry());
    }
  
    return {
      threadId: randomThreadId,
      diaryEntries: randomDiaryEntries,
    };
  }
  
  constructor() {

    for (let i = 0; i < 100; i++) {
      this.chatThreads.push(this.generateRandomChatThread());
    }
    
  }

  getChatThreadsForThreadId(threadId: string): DiaryEntry[] {
    const chatThread = this.chatThreads.find(
      (thread) => thread.threadId === threadId
    );

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

  addEntryInChatThread(chatThread: ChatThread): void {
    if (ChatThread) {
      console.log('initial' + this.chatThreads.length);

      this.chatThreads.unshift(chatThread);
      console.log('final' + this.chatThreads.length);
    }
  }

  addEntryInMarkedThread(threadId: string, entry: DiaryEntry): void {
    if (threadId && entry) {
      console.log(
        'initial' +
          this.chatThreads.find((chatThread) => chatThread.threadId == threadId)
            ?.diaryEntries.length
      );
      this.chatThreads
        .find((chatThread) => chatThread.threadId == threadId)
        ?.diaryEntries.unshift(entry);
      console.log(
        'final' +
          this.chatThreads.find((chatThread) => chatThread.threadId == threadId)
            ?.diaryEntries.length
      );
    }
  }

  // Search section

  getChatThreadsFromKeyword(query: string) {
    if (query) {
      var filteredChatThreads = this.chatThreads.filter((chatThread) =>
        chatThread.diaryEntries.some((entry) =>
          entry.title.toLowerCase().includes(query.toLowerCase()) ||
          entry.description.toLowerCase().includes(query.toLowerCase())
        )
      );
      return filteredChatThreads;
    } else {
      return this.chatThreads;
    }
  }
}
