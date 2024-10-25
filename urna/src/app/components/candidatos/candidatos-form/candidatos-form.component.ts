import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Candidato } from '../../../models/candidato';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatoService } from '../../../services/candidato.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-candidatos-form',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './candidatos-form.component.html',
  styleUrl: './candidatos-form.component.scss'
})
export class CandidatosFormComponent {


  tituloComponente: string = "Cadastrar Candidato";

  candidato: Candidato = new Candidato(0,'','',null,0,'',0);

  router = inject(Router);
  rotaAtual = inject(ActivatedRoute);

  candidatoService = inject(CandidatoService);

  constructor(){
    let id = this.rotaAtual.snapshot.params['id'];
    if (id > 0){

      this.tituloComponente = "Editar Candidato";
      this.findById(id);
    }
  }

  findById(id: number){
    this.candidatoService.findById(id).subscribe({
      next: cand => {
        this.candidato = cand;
      },
      error: erro =>{
        alert('ID não encontrado');
      }
    })
  }

  save() {
    this.candidatoService.save(this.candidato).subscribe({
      next: resposta => {
        Swal.fire({
          title: 'Candidato cadastrado com sucesso!',
          icon: "success"
        }).then(() => {
          this.router.navigate(['admin/candidatos']);
        });
      },
      error: erro => {
        Swal.fire({
          title: 'Erro ao salvar Candidato',
          icon: 'error'
        });
      }
    });
  }

  update(){
    this.candidatoService.save(this.candidato).subscribe({
      next: resposta => {
        Swal.fire({
          title: 'Candidato atualizado com sucesso!',
          icon: "success"
        }).then(() => {
          this.router.navigate(['admin/candidatos']);
        });
      },
      error: erro => {
        Swal.fire({
          title: 'Erro ao salvar candidato',
          icon: 'error'
        });
      }
    });
  }

}
