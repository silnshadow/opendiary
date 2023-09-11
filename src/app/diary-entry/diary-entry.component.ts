import { Component, OnInit } from '@angular/core';
import { DiaryEntry } from '../models/diary-entry';
import { DiaryserviceService } from '../diaryservice.service';

@Component({
  selector: 'app-diary-entry',
  templateUrl: './diary-entry.component.html',
  styleUrls: ['./diary-entry.component.css'],
})
export class DiaryEntryComponent implements OnInit {
  entry: DiaryEntry = new DiaryEntry();

  constructor(private diaryserviceService: DiaryserviceService) {}

  ngOnInit(): void {}

  addEntry(): void {
    if (this.entry.title.trim() !== '' && this.entry.description.trim() !== '') {
      this.entry.publishedDate = new Date();
      
      this.diaryserviceService.addEntryInPersonalDiary(this.entry);
      
      this.entry = new DiaryEntry();
      
      console.log('Adding entry:', this.entry);
    } else {
     
      console.log('Title and description are required.');
    }
  }
  
}
