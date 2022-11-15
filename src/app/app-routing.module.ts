import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LabsComponent } from './components/labs/labs.component';
import { MedicamentosComponent } from './components/medicamentos/medicamentos.component';


const routes: Routes = [
  { path: '', redirectTo: 'dash', pathMatch: 'full' },
  { path: 'dash', component: DashboardComponent },
  { path: 'labs', component: LabsComponent },
  { path: 'medicamentos', component: MedicamentosComponent },
  { path: 'cadastrar', component: CadastrarComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
