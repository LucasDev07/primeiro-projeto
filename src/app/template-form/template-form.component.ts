/*Template-driven form: A lógica do formulário é definida diretamente no 
template HTML usando diretivas como ngModel.
Simplicidade: Ideal para formulários simples e de pequena escala.
A validação é feita no template, utilizando atributos como required e minlength.
Two-way Data Binding: Utiliza a vinculação bidirecional de dados para 
sincronizar o modelo de dados no componente com os elementos do formulário no 
template.*/
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Customer } from '../models/customer';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {

  model = new Customer(null, '', '');

  generos = ['Masculino', 'Feminino', 'Prefiro não informar'];

  submitted = false
  
  onSubmit() {
    /**/
    this.submitted = true;

    console.warn(this.model);
  }
}
