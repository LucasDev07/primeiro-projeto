import { Component } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent {
  

  /*Injeção de dependência: trata-se de um padrão de design que permite que classes com decoradores do Angular, como Componentes, 
  Diretivas, Pipes e Injectables, configurem as dependências que precisam.*/
  constructor(private customerService: CustomerService) {

  }

   customers: any; 
  /*O ngOnInit é um utilizado para realizar inicializações adicionais após a criação do componente. Ele é chamado uma vez, logo após
   o Angular ter inicializado todas as propriedades vinculadas aos dados do componente.*/
  ngOnInit() {

    this.customers = this.customerService.getCustomers();
  }
}
