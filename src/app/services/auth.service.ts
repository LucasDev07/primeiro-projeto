/*service auth: criada com o intuito de regulamentar a navegação de rotas de usuários do sistema.*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  update(acesso: boolean) {
    /*"acesso" necessita da utilização de toString pois sessionStorage só utiliza strings.*/
    /*setItem(): é usada para armazenar dados no armazenamento web, como localStorage ou sessionStorage.*/
    sessionStorage.setItem('podeAcessar', acesso.toString());
  }

  podeAcessar(): boolean {

    /*getItem() é usado para recuperar um valor armazenado no localStorage e no sessionStorage do navegador.*/
    let podeAcessarString = sessionStorage.getItem('podeAcessar');
  
    if(!podeAcessarString) {
      return false;
    } 

     return JSON.parse(podeAcessarString);
  }
}
