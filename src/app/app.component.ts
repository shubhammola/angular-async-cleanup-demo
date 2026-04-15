import { Component } from '@angular/core';
import { UserDataComponent } from './user-data/user-data.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserDataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-cleanup-demo';
}
