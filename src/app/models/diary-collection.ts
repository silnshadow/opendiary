import { DiaryEntry } from "./diary-entry";

export class DiaryCollection{

    getPersonalDiary(): DiaryEntry[] {
        const personalDiaries: DiaryEntry[] = [
          {
            title: 'Entry 1',
            description: 'This is the first personal diary entry.',
            publishedDate: new Date('2023-09-15'),
          },
          {
            title: 'Entry 2',
            description: 'This is the second personal diary entry.',
            publishedDate: new Date('2023-09-16'),
          },
          {
            title: 'Entry 3',
            description: 'This is the third personal diary entry.',
            publishedDate: new Date('2023-09-17'),
          },
          {
            title: 'Entry 4',
            description: 'This is the fourth personal diary entry.',
            publishedDate: new Date('2023-09-18'),
          },
          {
            title: 'Entry 5',
            description: 'This is the fifth personal diary entry.',
            publishedDate: new Date('2023-09-19'),
          },
        ];
      
        return personalDiaries;
      }
      
}