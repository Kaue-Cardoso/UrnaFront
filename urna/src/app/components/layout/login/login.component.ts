import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Login } from '../../../models/login';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MdbFormsModule, RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  login: Login = new Login();

  router = inject(Router);

  autenticar() {
    if (this.login.username == 'admin' && this.login.senha == 'admin') {
      Swal.fire({
        text: 'Logado com sucesso',
        icon: 'success',
      });
      this.router.navigate(['/admin/dashboard']);
    } else {
      Swal.fire({
        text: 'Usuario nao autenticado',
        icon: 'error',
      });
    }
  }
}
