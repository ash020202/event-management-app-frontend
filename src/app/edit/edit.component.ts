import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import {
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
})
export class EditComponent implements OnInit {
  eventForm!: FormGroup;
  eventId!: string;
  isFormSubmitted: boolean = false;

  constructor(
    private eventsService: EventsService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.eventId = this.activeRoute.snapshot.params['id'];

    this.initializeForm();
    this.getEventDetails();
  }

  initializeForm(): void {
    this.eventForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      imageUrl: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      time: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
  }

  getEventDetails(): void {
    this.eventsService.individualEvent(this.eventId).subscribe((data: any) => {
      this.eventForm.patchValue({
        title: data.title,
        imageUrl: data.imageUrl,
        date: data.date,
        time: data.time,
        location: data.location,
        description: data.description,
      });
    });
  }

  updateEvent(): void {
    if (this.eventForm.invalid) {
      this.isFormSubmitted = true;

      alert('Kindly Fill all the required fields');
    } else {
      this.isFormSubmitted = false;
      const eventData = this.eventForm.value;

      this.eventsService.updateEvent(this.eventId, eventData).subscribe();
    }

    if (this.eventsService.arrayLength) {
      this.router.navigate(['/allevent']);
    } else {
      this.router.navigate(['/']);
    }
  }
}
