import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/home/encabezado.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { PortafolioComponent } from './componentes/portafolio/portafolio.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { LoginComponent } from './componentes/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { EditSkillComponent } from './componentes/habilidades/edit-skill.component';
import { NewSkillComponent } from './componentes/habilidades/new-skill.component';
import { EditSobreMiComponent } from './componentes/sobre-mi/edit-sobre-mi.component';


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    SobreMiComponent,
    HabilidadesComponent,
    ExperienciaComponent,
    PortafolioComponent,
    ContactoComponent,
    FooterComponent,
    MenuComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    EducacionComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditSobreMiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxTypedJsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
