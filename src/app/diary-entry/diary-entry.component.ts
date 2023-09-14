import { Component, OnInit } from '@angular/core';
import { ChatThread, DiaryEntry } from '../models/diary-entry';
import { DiaryserviceService } from '../Service/diaryservice.service';
import { ActivatedRoute } from '@angular/router';
import { Generator } from '../helper/Generator';

@Component({
  selector: 'app-diary-entry',
  templateUrl: './diary-entry.component.html',
  styleUrls: ['./diary-entry.component.css'],
})
export class DiaryEntryComponent implements OnInit {
  entry: DiaryEntry = new DiaryEntry();
  threadId: string = '';
  generator: Generator = new Generator();

  constructor(
    private diaryserviceService: DiaryserviceService,
    private router: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.getThreadId();
  }

  getThreadId(): void {
    this.threadId = this.router.snapshot.paramMap.get('threadId') || '';
  }

  addEntry(): void {
    console.log('Adding entry:', this.entry);
    if (this.threadId) {
      this.entry.publishedDate = new Date();
      this.entry.loggedUser.id = (5 + 1).toString();
      this.diaryserviceService.addEntryInMarkedThread(
        this.threadId,
        this.entry
      );
    }
    else if(
      this.entry.title.trim() !== '' &&
      this.entry.description.trim() !== ''
    ) {
      this.entry.publishedDate = new Date();
      this.entry.loggedUser.id = (5 + 1).toString();
      
      const chatThread: ChatThread ={
        threadId: this.generator.generateRandomThreadId(),
        diaryEntries: [this.entry]
      }
      this.diaryserviceService.addEntryInChatThread(chatThread);

      this.entry = new DiaryEntry();
    } else {
      console.log('Title and description are required.');
    }
  }
}
