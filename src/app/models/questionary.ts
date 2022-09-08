import { answer } from "./answer";

export class questionary {
    id?:number;
    uid:string;
    titulo:string;
    descripcion:string;
    codigo:string;
    cantQuestions:number;
    dateCreated: Date;
    listQuestions: answer[];

    constructor(uid:string, titulo:string, descripcion:string, codigo:string, cantQuestions:number,
        dateCreated: Date, listQuestions:answer[]){
            this.uid = uid;
            this.titulo = titulo;
            this.descripcion = descripcion;
            this.codigo = codigo;
            this.cantQuestions = cantQuestions;
            this.dateCreated = dateCreated;
            this.listQuestions = listQuestions;
    }
}