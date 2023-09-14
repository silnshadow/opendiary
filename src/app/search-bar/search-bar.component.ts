import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  searchQuery: string = '';

  @Output() searchEvent = new EventEmitter<string>();

  onSearch(): void {
    console.log("SearchComponent "+this.searchQuery);
    this.searchEvent.emit(this.searchQuery);
  }
}
