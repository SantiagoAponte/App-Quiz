import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {
 titleQuestionary : string = '';
 description: string = '';
  constructor() { }
}
