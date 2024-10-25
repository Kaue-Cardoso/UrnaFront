import { Component, inject } from '@angular/core';
import { Eleitor } from '../../../models/eleitor';
import { Candidato } from '../../../models/candidato';
import { EleitorService } from '../../../services/eleitor.service';
import { CandidatoService } from '../../../services/candidato.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  listaEleitores: Eleitor[] = [];
  listaCandidatos: Candidato[] = [];
  listaCandidatosAtivos: Candidato[] = [];

  eleitorService = inject(EleitorService);
  candidatoService = inject(CandidatoService);

  constructor() {
    this.findAllEleitores();
    this.findAllCandidatos();
    this.findAtivos();
  }

  getQuantidadeAptos(): number {
    return this.listaEleitores.filter(eleitor => eleitor.status === "APTO").length;
  }

  findAllEleitores() {
    this.eleitorService.findAllEleitores().subscribe({
      next: (listE) => {
        this.listaEleitores = listE;
      },
      error: (erro) => {
        alert('Deu Erro');
      },
    });
  }
  findAllCandidatos() {
    this.candidatoService.findAllCandidatos().subscribe({
      next: (listC) => {
        this.listaCandidatos = listC;
      },
      error: (erro) => {
        alert('Deu Erro');
      },
    });
  }
  findAtivos() {
    this.candidatoService.findAtivos().subscribe({
      next: (Ativos) => {
        this.listaCandidatosAtivos = Ativos;
      },
      error: (erro) => {
        alert('Deu Erro');
      },
    });
  }
}
