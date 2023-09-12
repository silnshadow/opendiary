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
    console.log('Adding entry:', this.entry);
    if (this.entry.title.trim() !== '' && this.entry.description.trim() !== '') {
      this.entry.publishedDate = new Date();
      this.entry.loggedUser.id = (5+1).toString();

      
      this.diaryserviceService.addEntryInPersonalDiary(this.entry);
      
      this.entry = new DiaryEntry();
      
    } else {
     
      console.log('Title and description are required.');
    }
  }
  
}
