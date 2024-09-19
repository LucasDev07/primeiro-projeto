/* guards são usados para proteger rotas e controlar a navegação dentro da aplicação. Eles são interfaces que implementam métodos 
específicos que retornam um valor booleano, uma Promise que resolve para um booleano, ou um Observable que emite um booleano.*/

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

export const guardiaoGuard: CanActivateFn = (route, state) => {
  
 /*inject() é usada para injetar dependências diretamente em um contexto de injeção. É útil para obter instâncias de serviços ou 
 outros objetos que são gerenciados pelo sistema de injeção de dependências do Angular.*/ 
 let podeAcessar = inject(AuthService).podeAcessar();

 if(!podeAcessar) {

  /*navigate: é usado para navegar programaticamente entre diferentes rotas dentro de uma aplicação. Faz parte do serviço Router
   e permite que você altere a URL no navegador e carregue o componente correspondente sem recarregar a página inteira*/
  inject(Router).navigate(['hello-world']);
  return false;
 }
 
  return true;
};
