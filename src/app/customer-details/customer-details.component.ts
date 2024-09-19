import { Component } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.css'
})
export class CustomerDetailsComponent {

  /* ActivatedRoute: é um serviço usado para acessar informações sobre a rota associada ao componente que está carregado. É 
  essencial para a navegação dentro de uma aplicação Angular, fornecendo dados como parâmetros de rota, parâmetros de 
  consulta e outros metadados específicos da rota.*/
  constructor(private route: ActivatedRoute, private customerService: CustomerService) {

  }

  customer: any;

  ngOnInit() {

    /*snapshot: refere-se a uma captura instantânea do estado atual de uma rota. Quando usa-se o ActivatedRoute para acessar parâmetros 
    de rota, pode-se obter um snapshot desses parâmetros no momento em que a rota foi ativada. É útil para acessar dados de rota de 
    Sforma síncrona, sem precisar se inscrever em observáveis.*/

    /*O paramMap é uma propriedade do ActivatedRoute que fornece um mapa dos parâmetros da rota atual. É útil quando precisa-se 
    acessar parâmetros de rota de forma reativa, ou seja, quando se quer inscrever-se em mudanças nos parâmetros ao invés
     de capturá-los apenas uma vez com o snapshot.*/

    //pegar o id da url
    let id = this.route.snapshot.paramMap.get('id');

    if (id !== null) {

      /*getById: reupera o id da URL, transformando ele em forma númerica.*/
      this.customer = this.customerService.getById(+id);

    }

  }

}
