import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormationComponent } from './components/formation/formation.component';
import { EvenementComponent } from './components/evenement/evenement.component';
import { SalleComponent } from './components/salle/salle.component';

@NgModule({
  declarations: [
    AppComponent,
    FormationComponent,
    EvenementComponent,
    SalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
