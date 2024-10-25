import { Component, inject } from '@angular/core';
import { VotoService } from '../../services/voto.service';
import { Apuracao } from '../../models/apuracao';

@Component({
  selector: 'app-apuracao',
  standalone: true,
  imports: [],
  templateUrl: './apuracao.component.html',
  styleUrl: './apuracao.component.scss'
})
export class ApuracaoComponent {
  apuracao?: Apuracao;
  mostrarTabela: boolean = false;

  votoService = inject(VotoService);
  constructor(){
    this.carregarApuracao(); // Carregar os dados diretamente
  }

  carregarApuracao(): void {
    this.votoService.realizarApuracao().subscribe({
      next: (dadosApuracao) => {
        this.apuracao = dadosApuracao;
        console.log(this.apuracao.candidatosVereador); // Mostra os vereadores carregados
        console.log(this.apuracao.candidatosPrefeito); // Mostra os prefeitos carregados

      },
      error: (erro) => {
        console.error('Erro ao obter apuração:', erro);
      }
    });
} 

}
