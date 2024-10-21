import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent {

}
