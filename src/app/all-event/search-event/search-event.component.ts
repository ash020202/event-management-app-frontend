import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-event',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-event.component.html',
  styleUrl: './search-event.component.scss',
})
export class SearchEventComponent {
  searchTxt = '';

  @Output() searchInput = new EventEmitter<string>();
  setSearchText() {
    this.searchInput.emit(this.searchTxt);
  }
  value(event:KeyboardEvent) {
    console.log(event);
  }
}
