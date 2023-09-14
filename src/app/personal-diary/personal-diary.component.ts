import { Component, OnInit } from '@angular/core';
import { ChatThread, DiaryEntry } from '../models/diary-entry';
import { PageEvent } from '@angular/material/paginator';
import { DiaryserviceService } from '../diaryservice.service';
import { PaginatorComponent } from '../common-component/paginator/paginator.component';

@Component({
  selector: 'app-personal-diary',
  templateUrl: './personal-diary.component.html',
  styleUrls: ['./personal-diary.component.css'],
})
export class PersonalDiaryComponent implements OnInit {
  personalDiaryEntries: DiaryEntry[] = [];
  chatThreads: ChatThread[] = [];
  displayThreads: ChatThread[] = [];
  dailyEntryVisible: boolean = false;
  searchResults: ChatThread[] = [];
  pageSize = 2;
  pageIndex = 0;

  constructor(private diaryserviceService: DiaryserviceService) {

    this.chatThreads = this.diaryserviceService.getChatThreads().reverse();
    
    this.displayThreads = this.chatThreads.slice(0, this.pageSize);
  }

  ngOnInit(): void {}

  setEntryVisibility(): void {
    this.dailyEntryVisible = !this.dailyEntryVisible;
  }

  performSearch(query: string): void {
    console.log(`Search query: ${query}`);
    var results = this.diaryserviceService.getChatThreadsFromKeyword(query);
    this.searchResults = results;
    this.displayThreads = results;
    console.log(results.length);
  }

  handlePageEvent(event: PageEvent) {
    console.log('Page changed handling:', event);

    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;

    this.displayThreads = this.chatThreads.slice(startIndex, endIndex);
  }
}
