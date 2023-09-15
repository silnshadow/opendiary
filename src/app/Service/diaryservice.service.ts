import { Injectable } from '@angular/core';
import { ChatThread, DiaryEntry } from '../models/diary-entry';
import { Generator } from '../helper/Generator';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DiaryserviceService {
  private personalDiaries: DiaryEntry[] = [];
  private chatThreads: ChatThread[] = [];
// Create a BehaviorSubject to track chatThreads changes
 private chatThreadsSubject = new BehaviorSubject<ChatThread[]>([]);
  private generator = new Generator();
  
  constructor() {

    for (let i = 0; i < 100; i++) {
      this.addEntryInChatThread(this.generator.generateRandomChatThread());
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


  getChatThreads(): Observable<ChatThread[]> {
    return this.chatThreadsSubject.asObservable();
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
      this.chatThreadsSubject.next([...this.chatThreads]);
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
