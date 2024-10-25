import { Component, inject } from '@angular/core';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { Candidato } from '../../../models/candidato';
import { CandidatoService } from '../../../services/candidato.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-candidatos-list',
  standalone: true,
  imports: [MdbDropdownModule, MdbRippleModule],
  templateUrl: './candidatos-list.component.html',
  styleUrl: './candidatos-list.component.scss'
})
export class CandidatosListComponent {

  lista: Candidato[] = [];

  candidatoService = inject(CandidatoService);

  constructor(){
    this.findAllCandidatos();
  }
  findAllCandidatos(){
    this.candidatoService.findAllCandidatos().subscribe({
      next: list => {
        this.lista = list;
      },
      error: erro => {
        alert("Deu Erro");
      }
    })
  }

  deleteById(eleitor: Candidato){
    Swal.fire({
      title: "Tem certeza que deseja deletar o eleitor "+eleitor.nomeCompleto+"?",
      showCancelButton: true,
      confirmButtonText: "Sim",
      cancelButtonText: `Cancelar`
    }).then((result) => {
      if (result.isConfirmed) {

        
        this.candidatoService.delete(eleitor.id).subscribe({
          next: mensagem =>{
            Swal.fire(mensagem, "Candidato Excluido", "success");
            this.findAllCandidatos();
          },
          error: erro => {
            alert('Erro ao deletar');
          }
        })

      }
    });
  }
}
