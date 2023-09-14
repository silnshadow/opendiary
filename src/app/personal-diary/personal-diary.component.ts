import { Component, OnInit } from '@angular/core';
import { ChatThread, DiaryEntry } from '../models/diary-entry';
import { DiaryserviceService } from '../diaryservice.service';

@Component({
  selector: 'app-personal-diary',
  templateUrl: './personal-diary.component.html',
  styleUrls: ['./personal-diary.component.css'],
})
export class PersonalDiaryComponent implements OnInit {
  personalDiaryEntries: DiaryEntry[] = [];
  chatThreads: ChatThread[] = [];
  dailyEntryVisible: boolean = false;
  searchResults: ChatThread[] = [];

  constructor(private diaryserviceService: DiaryserviceService) {
    this.personalDiaryEntries = this.diaryserviceService
      .getPersonalDiary()
      .reverse();
    this.chatThreads = this.diaryserviceService.getChatThreads();
  }
  ngOnInit(): void {}

  setEntryVisibility(): void {
    this.dailyEntryVisible = !this.dailyEntryVisible;
  }
  
  performSearch(query: string): void {
    console.log(`Search query: ${query}`);
    var results = this.diaryserviceService.getChatThreadsFromKeyword(query);
    this.searchResults = results;
    this.chatThreads = results;
    console.log(results.length);
  }
}
