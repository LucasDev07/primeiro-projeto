import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

//CONCEITUAR SERVICES
export class CustomerService {

  constructor() { }

  private customers = [
    {id: 1, nome: 'Renato'},
    {id: 2, nome: 'João'},
    {id: 3, nome: 'Adriano'}
  ]  
  /* getCustomers em um service geralmente é responsável por buscar um array de objetos, seja de uma fonte local ou de um servidor 
  remoto.*/
  getCustomers() {
    return this.customers;
  }

  getById(id: number) {

    /*find: é usado para encontrar o primeiro elemento em um array que satisfaça uma condição específica. Executa uma função de callback
     para cada elemento do array até encontrar um que retorne true. Quando isso acontece, ele retorna o valor desse elemento. 
     Se nenhum elemento satisfizer a condição, ele retorna undefined.*/
    let customer = this.customers.find(c => {
        return c.id === id; 
    });

    return customer;
  }
} 