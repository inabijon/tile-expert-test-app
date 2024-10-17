import { Component, inject } from '@angular/core';
import { SearchComponent } from "./search/search.component";
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { MobileHeaderComponent } from './mobile-header/mobile-header.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isSearchBarOpen: boolean = true;
  private offcanvasService = inject(NgbOffcanvas);

  constructor() {
    window.onresize = () => {
        if(window.innerWidth >= 576) {
          this.offcanvasService.dismiss()
        } else {
          this.isSearchBarOpen = false;
        }
    };

  }

  open() {
    this.isSearchBarOpen = true;
  }

  openMobileHeader() {
    this.offcanvasService.open(MobileHeaderComponent, { position: 'end', panelClass: 'w-100' })
  }

  add() {}

  onSearchBarClose() {
    this.isSearchBarOpen = false;
  }
}
