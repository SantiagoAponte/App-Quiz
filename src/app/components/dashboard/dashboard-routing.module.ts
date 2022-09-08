import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatedQuestionsComponent } from './created-questions/created-questions.component';
import { CreatedQuizzComponent } from './created-quizz/created-quizz.component';
import { ListQuestionaireComponent } from './list-questionaire/list-questionaire.component';


const routes: Routes = [
{path:'', component: ListQuestionaireComponent},
{path: 'createdQuizz', component: CreatedQuizzComponent},
{path: 'createdQuestions', component: CreatedQuestionsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
