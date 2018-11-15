import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab:Number=2;
  mostrarCategoria:Number=1;
  mostrarHilos=0;
  mostrarHiloCompleto=0;

  constructor(public navCtrl: NavController) {

  }
  
  cambiarTap(numero){
    
    this.tab=numero;
  }
  ocultarCategoria(){
    this.mostrarCategoria=0;
    this.mostrarHilos=1;
    this.mostrarHiloCompleto=0;
  }

  muestraCategoria(){
    this.mostrarCategoria=1;
    this.mostrarHilos=0;
    this.mostrarHiloCompleto=0;

  }

  abrirHilo(numero){
    this.mostrarCategoria=0;
    this.mostrarHilos=0;
    this.mostrarHiloCompleto=1;
  }
}
