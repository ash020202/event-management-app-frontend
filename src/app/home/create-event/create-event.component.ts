import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { EventsService } from '../../events.service';

@Component({
  selector: 'app-create-event',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule, FormsModule],
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.scss',
})
export class CreateEventComponent implements OnInit {
  constructor(public eventsService: EventsService, private router: Router) {}
  ngOnInit(): void {
    // this.eventsService.getEvents();
  }
  isFormSubmitted: boolean = false;
  eventForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    location: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    time: new FormControl('', [Validators.required]),
    imageUrl: new FormControl('', [Validators.required]),
  });

  createEvent() {
    if (this.eventForm.invalid) {
      this.isFormSubmitted = true;
    } else {
      this.eventsService.addEvent(this.eventForm.value).subscribe();
      this.isFormSubmitted = false;
      // window.location.reload();
      if (this.eventsService.arrayLength) {
        this.router.navigate(['/allevent']);
        // setInterval(() => {
        //   this.eventsService.getEvents();
        // }, 1000);
      } else {
        this.router.navigate(['/']);
      }
    }
  }
}
