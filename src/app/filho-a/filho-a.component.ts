import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filho-a',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filho-a.component.html',
  styleUrl: './filho-a.component.css'
})
export class FilhoAComponent {
  /*@Input: é usado para permitir que um componente receba dados de um 
  componente pai. Isso é essencial para a comunicação entre componentes, 
  especialmente quando deseja-se passar valores ou configurações específicas 
  para um componente filho.*/
  @Input() texto = '';

  /*@Output é usado para permitir que um componente filho envie dados ou 
  eventos para um componente pai. Ele marca uma propriedade no componente 
  filho como uma “porta” através da qual os dados podem fluir para o 
  componente pai. Para isso, o @Output é geralmente combinado com a 
  classe EventEmitter.*/

  /*EventEmitter é usado para emitir eventos de um componente filho para um 
  componente pai. Ele é uma extensão da classe Subject do RxJS, 
  permitindo a emissão de eventos de forma síncrona ou assíncrona.*/
  @Output() textoPreenchido = new EventEmitter<string>();

  enviar(value: string) {
    this.textoPreenchido.emit(value);
  }
    

}
