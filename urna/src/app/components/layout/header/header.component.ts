import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, MdbRippleModule, MdbDropdownModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isSidebarCollapsed = false;

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
