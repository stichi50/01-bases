import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})
export class heroeComponent {

    nombre:string = 'hulk';
    edad:number = 40;

    get nombrecapitalizado(){
       return  this.nombre.toUpperCase();
    }

    NomreXEdad():string {
        return `${this.nombre} | ${this.edad}`;
    }

    CambiarNombre():void {
       this.nombre = 'Spiderman';
    }
    CambiarEdad():void {
        this.edad = 95;
    }
}