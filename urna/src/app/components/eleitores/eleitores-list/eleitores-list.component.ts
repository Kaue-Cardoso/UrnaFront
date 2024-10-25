import { Component, inject } from '@angular/core';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { EleitorService } from '../../../services/eleitor.service';
import { Eleitor } from '../../../models/eleitor';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eleitores-list',
  standalone: true,
  imports: [MdbDropdownModule, MdbRippleModule],
  templateUrl: './eleitores-list.component.html',
  styleUrl: './eleitores-list.component.scss'
})
export class EleitoresListComponent {

  lista: Eleitor[] = [];

  eleitorService = inject(EleitorService);

  constructor(){
    this.findAllEleitores();
  }
  findAllEleitores(){
    this.eleitorService.findAllEleitores().subscribe({
      next: list => {
        this.lista = list;
      },
      error: erro => {
        alert("Deu Erro");
      }
    })
  }

  deleteById(eleitor: Eleitor){


    Swal.fire({
      title: "Tem certeza que deseja deletar o eleitor "+eleitor.nomeCompleto+"?",
      showCancelButton: true,
      confirmButtonText: "Sim",
      cancelButtonText: `Cancelar`
    }).then((result) => {
      if (result.isConfirmed) {

        
        this.eleitorService.delete(eleitor.id).subscribe({
          next: mensagem =>{
            Swal.fire(mensagem, "", "success");
            this.findAllEleitores();
          },
          error: erro => {
            alert('Erro ao deletar');
          }
        })

      }
    });


  }
}
