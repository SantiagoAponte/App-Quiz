import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
error = false;
pin = "";
  constructor() { }

  ngOnInit(): void {
  }

  ingresar(){
    //validate if the user dont write any character
    if(this.pin === ""){
      this.error = true;
      
      setTimeout(() => {
        this.error = false;
      },3000)
    } else {
      this.error = false;
    }
  }

}
