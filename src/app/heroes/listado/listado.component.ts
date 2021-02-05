import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

 heroes:string[] = ['Capitan America','Hulk','Ironman','Kratos'];

 heroeBorrado:string = '';

 borrarHeroe(){
    //this.heroes.splice(1,1);
    this.heroeBorrado = this.heroes.shift() || '';
    
 }


 agregarHeroe(){
   this.heroes.splice(1,0,'Mutans')
 }

}
