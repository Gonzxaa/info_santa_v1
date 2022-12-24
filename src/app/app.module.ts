import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponentComponent } from './components/nav-component/nav-component.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { RouterModule, Routes } from '@angular/router';
import { NegociosGeneralComponentComponent } from './components/negocios-general-component/negocios-general-component.component';
import { NegocioEspecificoComponentComponent } from './components/negocio-especifico-component/negocio-especifico-component.component';

const dataRouting: Routes = [
  {path: '', component: HomeComponentComponent},
  {path: 'Negocios', component: NegociosGeneralComponentComponent},
  {path: 'Negocios/NegocioSeleccionado', component: NegocioEspecificoComponentComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponentComponent,
    HomeComponentComponent,
    NegociosGeneralComponentComponent,
    NegocioEspecificoComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(dataRouting)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
