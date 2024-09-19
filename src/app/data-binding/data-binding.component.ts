import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  estilizarTitulo = false;

  //botaoClass = "botao";
  //ou
  //botaoClass = ['botao', 'verde']
  //ou
  botaoClass = {botao: true, verde: true}


  message = 'Meu primeiro data-binding';

  imagePath = 'assets/@renato.webp';

  imageWidth = 300;

  isDisabled = true;

  ariaLabel = 'Fechar';

  nomeCliente = '';

  // botaoFechar = `
  // border: 1px solid;
  // border-radius: 45px;
  // padding: 5px;
  // width: 30px;
  // height: 30px:
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // `;
  //ou
  botaoFechar = {
    border: '1px solid',
    'border-radius': '45px',
    padding: '5px',
    width: '30p',
    height: '30px',
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
  }

  enableCloseButton() {
    this.isDisabled = !this.isDisabled;
  }

  aplicarEstiloTitulo() {
    this.estilizarTitulo = !this.estilizarTitulo;

    this.botaoClass = {
      botao: true,
      verde: !this.botaoClass.verde
    }

    this.imageWidth += 10; 

  }
}
