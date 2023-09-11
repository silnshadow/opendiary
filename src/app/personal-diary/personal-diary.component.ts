import { Component, OnInit } from '@angular/core';
import { DiaryEntry } from '../models/diary-entry';
import { DiaryserviceService } from '../diaryservice.service';

@Component({
  selector: 'app-personal-diary',
  templateUrl: './personal-diary.component.html',
  styleUrls: ['./personal-diary.component.css']
})
export class PersonalDiaryComponent implements OnInit {
  personalDiaryEntries: DiaryEntry[] = [];

  constructor(private diaryserviceService: DiaryserviceService) {}

  ngOnInit(): void {
    this.personalDiaryEntries = this.diaryserviceService.getPersonalDiary();
  }
}
