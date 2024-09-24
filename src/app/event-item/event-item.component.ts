import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-event-item',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './event-item.component.html',
  styleUrl: './event-item.component.scss',
})
export class EventItemComponent {
  constructor(public eventService: EventsService) {}
  @Input() eventInfo: any;
}
