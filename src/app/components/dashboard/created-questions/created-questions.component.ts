import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { answer } from 'src/app/models/answer';
import { question } from 'src/app/models/question';
import { QuizzService } from 'src/app/services/quizz.service';

@Component({
  selector: 'app-created-questions',
  templateUrl: './created-questions.component.html',
  styleUrls: ['./created-questions.component.css']
})
export class CreatedQuestionsComponent implements OnInit {
  addQuestion: FormGroup;
  showError = false;
  constructor(private _quizzService: QuizzService,
    private fb: FormBuilder) {
    this.addQuestion = this.fb.group({
      titulo: ['', Validators.required],
      segundos: [10, Validators.required],
      puntos: [1000, Validators.required],
      respuesta1: this.fb.group({
        titulo: ['', Validators.required],
        esCorrecta: [false, Validators.required]
      }), respuesta2: this.fb.group({
        titulo: ['', Validators.required],
        esCorrecta: [false, Validators.required],
      }), respuesta3: this.fb.group({
        titulo: ['', Validators.required],
        esCorrecta: [false, Validators.required],
      }), respuesta4: this.fb.group({
        titulo: ['', Validators.required],
        esCorrecta: [false, Validators.required],
      })
    })

  }

  ngOnInit(): void {

  }

  get seg() {
    return this.addQuestion.get('segundos')?.value
  }
  get points() {
    return this.addQuestion.get('puntos')?.value
  }

  addQuest(){
    if(this.addQuestion.invalid || this.allIncorrect()){
      this.error();
      return;
    }
    let listAnswers: answer[] = [];
    const resTitle = this.addQuestion.get('respuesta1')?.get('titulo')?.value
    const resCorrect1 = this.addQuestion.get('respuesta1')?.get('esCorrecta')?.value
    
    const answer1 : answer = {
      descripcion: resTitle,
      esCorrecta: resCorrect1
    }
    listAnswers.push(answer1)

    const resTitle2 = this.addQuestion.get('respuesta1')?.get('titulo')?.value
    const resCorrect2 = this.addQuestion.get('respuesta1')?.get('esCorrecta')?.value
    
    const answer2 : answer = {
      descripcion: resTitle2,
      esCorrecta: resCorrect2
    }
    listAnswers.push(answer2)

    const resTitle3 = this.addQuestion.get('respuesta1')?.get('titulo')?.value
    const resCorrect3 = this.addQuestion.get('respuesta1')?.get('esCorrecta')?.value
    
    const answer3 : answer = {
      descripcion: resTitle3,
      esCorrecta: resCorrect3
    }
    if(resTitle3 != ''){
      listAnswers.push(answer3)
    }

    const resTitle4 = this.addQuestion.get('respuesta1')?.get('titulo')?.value
    const resCorrect4 = this.addQuestion.get('respuesta1')?.get('esCorrecta')?.value
    
    const answer4 : answer = {
      descripcion: resTitle4,
      esCorrecta: resCorrect4
    }
    if(resTitle4 != ''){
      listAnswers.push(answer4)
    }

    const titleQuestion = this.addQuestion.get('titulo')?.value;
    const segundos = this.addQuestion.get('segundos')?.value;
    const puntos = this.addQuestion.get('puntos')?.value;

    const question: question = {
      titulo: titleQuestion,
      segundos: segundos,
      puntos: puntos,
      listanswer: listAnswers
    }
  }
 allIncorrect(){
  const array = ['respuesta1','respuesta2','respuesta3','respuesta4']

  for (let i=0; i< array.length; i++){
    if(this.addQuestion.get(array[i])?.get('esCorrecta')?.value == true){
        return false;
    }
  }
  return true;
 }
  error(){
    this.showError = true;

      setTimeout(() =>{
        this.showError = false;
      }, 3000)
  }
  sumRestSec(numero:number){

    if(this.seg <= 5){
      return;
    }
    this.addQuestion.patchValue({
      segundos: this.seg + numero
    })
  }

  isCorrect(index:string){
    let stringRes = 'respuesta';
    let nroRes = stringRes.concat(index)
    const estadoRes = this.obtainStateRes(nroRes);
    this.addQuestion.get(nroRes)?.patchValue({
      esCorrecta: !estadoRes
    })
  }
  obtainStateRes(numRes: string): boolean {
    return this.addQuestion.get(numRes)?.get('esCorrecta')?.value;
  }

  setFalseRes(numRes:string){
    const array = ['respuesta1','respuesta2','respuesta3','respuesta4']

    for (let i=0; i< array.length; i++){
      if(array[i] !== numRes){
        this.addQuestion.get(array[i])?.patchValue({
          esCorrecta: false
        })
      }
    }
  }

}
