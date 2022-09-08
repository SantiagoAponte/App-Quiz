import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizzService } from 'src/app/services/quizz.service';

@Component({
  selector: 'app-created-quizz',
  templateUrl: './created-quizz.component.html',
  styleUrls: ['./created-quizz.component.css']
})
export class CreatedQuizzComponent implements OnInit {
  questionaryForm : FormGroup
  showError = false;
  
  constructor(private fb: FormBuilder,
    private router: Router,
    private _quizzService:QuizzService) { 
    this.questionaryForm = this.fb.group({
      title:['',Validators.required],
      description:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  follow(){
   if(this.questionaryForm.invalid){
    this.showError = true;
    setTimeout(() => {
      this.showError = false;
    }, 3000)
   } else {
    this._quizzService.titleQuestionary = this.questionaryForm.get('title')?.value
    this._quizzService.description = this.questionaryForm.get('description')?.value
    this.router.navigate(['/dashboard/createdQuestions']);
   }
  }

}
