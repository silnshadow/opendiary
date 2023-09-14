import { ChatThread, DiaryEntry } from "../models/diary-entry";
import { User } from "../models/users";

export class Generator {

    assignThread(title: string): string {
        const currentDate = new Date();
        const day = currentDate.getDate().toString().padStart(2, '0');
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        const year = currentDate.getFullYear().toString();
      
        const thread = `${day}${month}${year}OD${title}`;
      
        return thread;
      }

      generateRandomThreadId(): string {
        const characters =
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const threadIdLength = 8; // Adjust the length as needed
        let threadId = '';
    
        for (let i = 0; i < threadIdLength; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          threadId += characters.charAt(randomIndex);
        }
    
        return threadId;
      }
      

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
          threadId: this.generateRandomThreadId(),
        };
      }
      
      generateRandomChatThread(): ChatThread {
        const randomThreadId = this.generateRandomThreadId();
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
}