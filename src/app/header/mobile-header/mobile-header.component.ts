import { Component, inject, Input } from '@angular/core';
import { NgbActiveOffcanvas, NgbOffcanvasModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterBarComponent } from "../search/filter-bar/filter-bar.component";

@Component({
  selector: 'app-mobile-header',
  standalone: true,
  imports: [NgbOffcanvasModule, FilterBarComponent],
  templateUrl: './mobile-header.component.html',
  styleUrl: './mobile-header.component.scss',
})
export class MobileHeaderComponent {
  activeOffcanvas = inject(NgbActiveOffcanvas);
  @Input() name: string = '';
}
