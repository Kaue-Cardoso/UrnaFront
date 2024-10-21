import { Routes } from '@angular/router';
import { LoginComponent } from './components/layout/login/login.component';
import { PrincipalComponent } from './components/layout/principal/principal.component';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { EleitoresListComponent } from './components/eleitores/eleitores-list/eleitores-list.component';
import { EleitoresFormComponent } from './components/eleitores/eleitores-form/eleitores-form.component';
import { CandidatosListComponent } from './components/candidatos/candidatos-list/candidatos-list.component';
import { CandidatosFormComponent } from './components/candidatos/candidatos-form/candidatos-form.component';

export const routes: Routes = [
    {path: "", redirectTo:"login", pathMatch:"full"},
    {path: "login", component: LoginComponent},
    {path: "admin", component: PrincipalComponent, children:[
        {path: "dashboard", component: DashboardComponent},
        {path: "eleitores", component: EleitoresListComponent},
        {path: "eleitores/new", component: EleitoresFormComponent},
        {path: "eleitores/edit/:id", component: EleitoresListComponent},
        {path: "candidatos", component: CandidatosListComponent},
        {path: "candidatos/new", component: CandidatosFormComponent},
        {path: "candidatos/edit/:id", component: CandidatosListComponent},
    ]}
];
