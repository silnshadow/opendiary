export class Generator {

    assignThread(title: string): string {
        const currentDate = new Date();
        const day = currentDate.getDate().toString().padStart(2, '0');
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        const year = currentDate.getFullYear().toString();
      
        const thread = `${day}${month}${year}OD${title}`;
      
        return thread;
      }

      public generateRandomThreadId(): string {
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
      

}