import { DiaryEntry } from "./diary-entry";

export interface Dairy{
    id: number;
    dairyType: OpenDiaryType;
    dairyEntries: Array<DiaryEntry>; 

}