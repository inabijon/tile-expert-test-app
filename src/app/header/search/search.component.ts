import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ClickOutsideDirective } from '../../directives/click-outside.directive';
import { FilterBarComponent } from './filter-bar/filter-bar.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule, ClickOutsideDirective, FilterBarComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  @Output() onFormClose = new EventEmitter<void>();

  search = new FormControl(this.lastFilterValue ? this.lastFilterValue : '');

  closeForm() {
    this.onFormClose.emit();
  }

  onSubmit(event: any) {
    event.preventDefault();
    //do something...
    // window.sessionStorage.setItem('lastFilterValue', this.search.value || '');
  }

  get lastFilterValue() {
    return window.sessionStorage.getItem('lastFilterValue');
  }
}
