import { answer } from "./answer";

export class question {
    titulo:string;
    puntos:number;
    segundos:number;
    listanswer: answer[];

    constructor(titulo:string, puntos:number, segundos:number, listanswer: answer[]){
        this.titulo = titulo;
        this.puntos = puntos;
        this.segundos = segundos,
        this.listanswer = listanswer;
    }
}