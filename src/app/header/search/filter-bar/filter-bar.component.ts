import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [],
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.scss',
})
export class FilterBarComponent {
  me() {
    console.log('me...');
  }
}