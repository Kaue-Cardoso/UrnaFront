import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { VotoService } from '../../services/voto.service';
import { Candidato } from '../../models/candidato';
import { CandidatoService } from '../../services/candidato.service';
import { Eleitor } from '../../models/eleitor';
import { EleitorService } from '../../services/eleitor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './voto.component.html',
  styleUrls: ['./voto.component.scss']
})
export class VotoComponent {

  votoService = inject(VotoService);
  candidatoService = inject(CandidatoService);
  eleitorService = inject(EleitorService);
  router = inject(Router);

  listaEleitores: Eleitor[] = [];
  lista: Candidato[] = [];
  candidatosPrefeito: Candidato[] = [];
  candidatosVereador: Candidato[] = [];

  numeroPrefeito: string = '';
  numeroVereador: string = '';
  cpfEleitor: string = "";
  numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  constructor() {
    this.findAllCandidatos();
    this.findAllEleitores();
  }

  findAllCandidatos() {
    this.candidatoService.findAllCandidatos().subscribe({
      next: list => {
        this.lista = list;
        this.filtrarCandidatos();
      },
      error: erro => {
        Swal.fire('Erro', 'Erro ao carregar candidatos!', 'error');
      }
    });
  }

  findAllEleitores() {
    this.eleitorService.findAllEleitores().subscribe({
      next: listE => {
        this.listaEleitores = listE;
      },
      error: erro => {
        Swal.fire('Erro', 'Erro ao carregar eleitores!', 'error');
      },
    });
  }

  filtrarCandidatos() {
    this.candidatosPrefeito = this.lista.filter(candidato => candidato.funcao === 1);
    this.candidatosVereador = this.lista.filter(candidato => candidato.funcao === 2);
  }

  adicionarNumero(numero: number): void {
    if (!this.cpfEleitor || this.cpfEleitor.length < 11) {
      this.cpfEleitor += numero.toString();
    } else if (!this.numeroPrefeito || this.numeroPrefeito.length < 2) {
      this.numeroPrefeito += numero.toString();
    } else if (!this.numeroVereador || this.numeroVereador.length < 5) {
      this.numeroVereador += numero.toString();
    }
  }

  corrigir(): void {
    this.numeroPrefeito = '';
    this.numeroVereador = '';
    this.cpfEleitor = '';
  }

  confirmar(): void {
    if (this.cpfEleitor.length !== 11) {
      Swal.fire('Erro', 'CPF deve ter 11 dígitos!', 'error');
      return;
    }

    const eleitor = this.listaEleitores.find(
      eleitor => eleitor.cpf === this.cpfEleitor // Comparar como string
    );

    const candidatoPrefeito = this.candidatosPrefeito.find(
      candidato => candidato.numero === parseInt(this.numeroPrefeito)
    );

    const candidatoVereador = this.candidatosVereador.find(
      candidato => candidato.numero === parseInt(this.numeroVereador)
    );

    if (!eleitor) {
      Swal.fire('Erro', 'Eleitor não encontrado!', 'error');
      return;
    }

    if (!candidatoPrefeito || !candidatoVereador) {
      Swal.fire('Erro', 'Número do candidato inválido!', 'error');
      return;
    }

    const voto = {
      eleitorId: eleitor.id, // Usar o ID do eleitor encontrado
      candidatoPrefeito: { id: candidatoPrefeito.id },
      candidatoVereador: { id: candidatoVereador.id }
    };

    this.votoService.votar(voto).subscribe({
      next: (mensagem) => {
        Swal.fire('Sucesso', mensagem, 'success');
        this.corrigir(); // Limpa os campos após o voto
        this.router.navigate(['admin/dashboard']);
      },
      error: (erro) => {
        console.log(erro);
        Swal.fire('Erro', 'Erro ao votar, tente novamente mais tarde!', 'error');
      }
    });
  }
}
