import { Component } from '@angular/core';
import JSON_DNegocio from '../../../assets/vendor/negocios_info.json'

interface Negocio {
  negocioID: number;
  nombre: string;
  direccion: string;
  imagenes: Imgenes;
  urlMaps: string;
  horariosLocal: HorariosLocal;
  tipoNegocioID: number;
  tipoNegocio: string;
  notas: string;
}

interface HorariosLocal {
  Lunes: string,
  Martes: string,
  Miercoles: string,
  Jueves: string,
  Viernes: string,
  Sabado: string,
  Domingo: string,
}

interface Imgenes {

}

@Component({
  selector: 'app-negocios-general-component',
  templateUrl: './negocios-general-component.component.html',
  styleUrls: ['./negocios-general-component.component.css']
})



export class NegociosGeneralComponentComponent {
  infoNegocios_json: any = JSON_DNegocio;

  item: Negocio = {
    negocioID: 0,
    nombre: '',
    direccion: '',
    imagenes: {
      urlImg: '',
    },
    urlMaps: '',
    horariosLocal: {
      Lunes: '',
      Martes: '',
      Miercoles: '',
      Jueves: '',
      Viernes: '',
      Sabado: '',
      Domingo: '',
    },
    tipoNegocioID: 0,
    tipoNegocio: '',
    notas: '',
  }

  ed(d : Negocio){
    this.item = d;
    // console.log(this.infoNegocios_json.imagenes)
  } 
}
