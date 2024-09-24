import { Component, OnInit } from '@angular/core';
import { CreateEventComponent } from './create-event/create-event.component';
import {
  ChildrenOutletContexts,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { EventItemComponent } from '../event-item/event-item.component';
import { CommonModule } from '@angular/common';
import { AllEventComponent } from '../all-event/all-event.component';
import { EventsService } from '../events.service';
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [
    CreateEventComponent,
    RouterOutlet,
    RouterLink,
    EventItemComponent,
    CommonModule,

    AllEventComponent,
  ],
})
export class HomeComponent implements OnInit {
  showMoreBtn: boolean = false;
  arrayLength: number = 0;
  eventinfoList: any = [];
  constructor(
    private eventService: EventsService,
    private contexts: ChildrenOutletContexts
  ) {
    this.eventService.getEvents().subscribe((data: any) => {});
  }

  ngOnInit(): void {
    // try {
    //   this.eventService.testingPost().subscribe((data) => {
    //     console.log(data);
    //   });
    //   console.log('testing called');
    // } catch (error) {
    //   console.log(error);
    // }

    this.eventService.getEvents().subscribe((data: any) => {
      this.eventinfoList = data;
      this.arrayLength = this.eventinfoList.length;
      if (this.arrayLength > 3) {
        this.showMoreBtn = true;
        this.arrayLength = 3;
        this.eventService.arrayLength = true;
      } else {
        this.arrayLength = this.eventinfoList.length;
        this.showMoreBtn = false;
      }
    });
  }
}
