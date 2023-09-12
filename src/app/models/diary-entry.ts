import { User } from "./users";

export class DiaryEntry {
    loggedUser: User = new User();
    title: string = '';
    description: string = '';
    publishedDate: Date = new Date();
  }
  