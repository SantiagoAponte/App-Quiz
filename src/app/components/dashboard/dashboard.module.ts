import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListQuestionaireComponent } from './list-questionaire/list-questionaire.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CreatedQuizzComponent } from './created-quizz/created-quizz.component';
import { SharedModule } from '../shared/shared.module';
import { CreatedQuestionsComponent } from './created-questions/created-questions.component';
import { ListQuestionsComponent } from './list-questions/list-questions.component';



@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    ListQuestionaireComponent,
    CreatedQuizzComponent,
    CreatedQuestionsComponent,
    ListQuestionsComponent
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
