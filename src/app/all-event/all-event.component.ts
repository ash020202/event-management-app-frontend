import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EventItemComponent } from '../event-item/event-item.component';
import { EventsService } from '../events.service';
import { SearchEventComponent } from './search-event/search-event.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-all-event',
  standalone: true,
  templateUrl: './all-event.component.html',
  styleUrl: './all-event.component.scss',
  imports: [RouterLink, EventItemComponent, SearchEventComponent, CommonModule],
})
export class AllEventComponent implements OnInit {
  eventinfoList: any = [];
  searchText: string = '';
  constructor(private eventService: EventsService) {}
  ngOnInit(): void {
    this.eventService.getEvents().subscribe((data) => {
      this.eventinfoList = data;
    });
  }

  setSearchTxt(input: string) {
    this.searchText = input;
  }
}
