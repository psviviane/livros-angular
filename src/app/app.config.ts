import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { ControleEditoraService } from './controle-editora';
import { ControleLivrosService } from './controle-livros';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Adicionado

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    importProvidersFrom(FormsModule),  // <--  correção
    ControleEditoraService,
    ControleLivrosService
  ]
};