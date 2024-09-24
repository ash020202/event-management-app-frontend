import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateEventComponent } from './home/create-event/create-event.component';
import { AllEventComponent } from './all-event/all-event.component';
import { EventDetailComponent } from './event-item/event-detail/event-detail.component';
import { EditComponent } from './edit/edit.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'create',
        component: CreateEventComponent,
        title: 'Create Event',
      },
    ],
    title: 'home',
  },
  {
    path: 'allevent',
    component: AllEventComponent,
    title: 'All Events',
  },
  {
    path: 'eventdetail/:id',
    component: EventDetailComponent,

    title: 'Event Detail',
  },

  { path: 'eventdetail/:id/edit', component: EditComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '**',
    redirectTo: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
