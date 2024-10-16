import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { AppPrimengModule } from './app-primeng.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubCategoriasComponent } from './pages/subcategorias/subcategorias.component';
import { CampoObrigatorioComponent } from './layout/campo-obrigatorio/campo-obrigatorio.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SubCategoriasComponent,
    CampoObrigatorioComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppPrimengModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
