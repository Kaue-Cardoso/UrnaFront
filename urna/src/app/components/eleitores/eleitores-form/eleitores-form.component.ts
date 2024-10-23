import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Eleitor } from '../../../models/eleitor';
import { ActivatedRoute, Router } from '@angular/router';
import { EleitorService } from '../../../services/eleitor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eleitores-form',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './eleitores-form.component.html',
  styleUrl: './eleitores-form.component.scss'
})
export class EleitoresFormComponent {

  tituloComponente: string = "Cadastrar Eleitor";

  eleitor: Eleitor = new Eleitor(0,'','','','','','','',);

  router = inject(Router);
  rotaAtual = inject(ActivatedRoute);

  eleitorService = inject(EleitorService);



  constructor(){
    let id = this.rotaAtual.snapshot.params['id'];
    if (id > 0){

      this.tituloComponente = "Editar Eleitor";
      this.findById(id);
    }
  }



  findById(id: number){
    this.eleitorService.findById(id).subscribe({
      next: eleit => {
        this.eleitor = eleit;
      },
      error: erro =>{
        alert('Não Achou o ID');
      }
    })
  }

  save(){

    this.eleitorService.save(this.eleitor).subscribe({
      next: mensagem => {
        Swal.fire({
          title: mensagem,
          icon: "success"
        }).then(() => {
          this.router.navigate(['admin/eleitores']);
        });
      },
      error: erro => {
        alert('Não Salvou');
      }
    });


  }

  update(){
    this.eleitorService.update(this.eleitor).subscribe({
      next: mensagem =>{
        Swal.fire({
          title: mensagem,
          icon: "success"
        }).then(() => {
          this.router.navigate(['admin/eleitores']);
        });
      },
      error: erro =>{
        alert('Não Foi Possivel Editar');
      }
    });
  }
}
