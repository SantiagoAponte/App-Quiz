import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListQuestionaireComponent } from './list-questionaire/list-questionaire.component';


const routes: Routes = [
{path:'', component: ListQuestionaireComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
