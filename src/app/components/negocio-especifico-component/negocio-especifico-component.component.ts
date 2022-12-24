import { Component, Input } from '@angular/core';

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
  selector: 'app-negocio-especifico-component',
  templateUrl: './negocio-especifico-component.component.html',
  styleUrls: ['./negocio-especifico-component.component.css']
})
export class NegocioEspecificoComponentComponent {
  @Input() dataEnviada: Negocio;
}
