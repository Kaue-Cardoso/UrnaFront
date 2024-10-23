import { Component } from '@angular/core';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { Candidato } from '../../../models/candidato';

@Component({
  selector: 'app-candidatos-list',
  standalone: true,
  imports: [MdbDropdownModule, MdbRippleModule],
  templateUrl: './candidatos-list.component.html',
  styleUrl: './candidatos-list.component.scss'
})
export class CandidatosListComponent {

  lista: Candidato[] = [];


}
