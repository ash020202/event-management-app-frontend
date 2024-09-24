import { CommonModule } from '@angular/common';
import { Component, OnInit, Output } from '@angular/core';
import {
  ActivatedRoute,
  ChildrenOutletContexts,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { EventsService } from '../../events.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './event-detail.component.html',
  styleUrl: './event-detail.component.scss',
})
export class EventDetailComponent implements OnInit {
  event: any;
  eventId: string = '';
  isEventReceived: boolean = false;

  constructor(
    private activeRoute: ActivatedRoute,
    private service: EventsService,
    private contexts: ChildrenOutletContexts
  ) {}

  ngOnInit(): void {
    this.eventId = this.activeRoute.snapshot.params['id'];

    this.service.individualEvent(this.eventId).subscribe((data: any) => {
      this.event = data;
      this.isEventReceived = true;
    });
  }
  delEvent() {
    this.service.deleteEvent(this.eventId);
  }
}
