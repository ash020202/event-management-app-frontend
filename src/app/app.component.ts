import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, RouterLink, HomeComponent],
})
export class AppComponent {
  title = 'EventManagement';
}
