/*Reactive Forms: cria e gerencia formulários de maneira mais estruturada e
 reativa.
 Os Reactive Forms são baseados em um modelo explícito e imutável, o que 
 facilita o controle e a validação dos dados.*/
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormBuilder,ReactiveFormsModule, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
 
  /*FormBuilder: fornece métodos para criar instâncias de FormControl, 
  FormGroup e FormArray com menos código, reduzindo a quantidade de código 
  repetitivo necessário para construir formulários complexos.*/
  constructor(private formBuilder: FormBuilder) {
    
  }
  /*FormGroup: é uma das principais classes usadas para gerenciar formulários 
  reativos. Ele permite agrupar vários controles de formulário (FormControl) em 
  uma única unidade lógica, facilitando o gerenciamento e a validação de 
  formulários complexos.*/

  //UTILIZANDO FORMGROUP
  //profileForm = new FormGroup({
    /*FormControl: rastreia o valor e o status de validação de um controle de 
    formulário individual. Ele permite que você gerencie e valide os dados de 
    entrada do usuário de forma eficiente.*/
    //name: new FormControl(''),
    //cpf: new FormControl(''),
    //address: new FormGroup(
     //{
     // street: new FormControl(''),
      //city: new FormControl(''),
      //state: new FormControl(''),
      //zip: new FormControl(''),
    //} 
  //)
  //});

  //UTILIZANDO FORMBUILDER
  /*Validators: Verificam se os valores de um formulário atendem a determinados
   requisitos. São usados para garantir a qualidade e a precisão dos dados
    inseridos pelos usuários. Quando um valor não atende aos critérios 
    especificados, o validator retorna um mapa de erros; caso contrário, 
    retorna null, indicando que a validação foi bem-sucedida.
    -required: Garante que o campo não esteja vazio.*/
  profileForm = this.formBuilder.group({
      name: ['', Validators.required],
      cpf: ['', Validators.required],
      address:this.formBuilder.group({
        street: [''],
        city: [''],
        state:[''],
        zip: ['']
      }),
      nicknames: this.formBuilder.array([this.formBuilder.control('')])
  });

  /*apelidos é uma propriedade que retorna os nicknames*/
  get apelidos() {
    /*O operador as é usado principalmente para fazer type assertions
    (ou “afirmações de tipo”). Permite que seja informado ao compilador que um 
    determinado valor deve ser tratado como um tipo específico. É útil quando 
    se tem certeza do tipo de um valor, mas o compilador não consegue 
    inferir isso automaticamente.*/

    /*FormArray: permite a criação de formulários dinâmicos, onde os controles
    podem ser adicionados ou removidos conforme necessário, sem precisar 
    conhecer todos os controles de antemão. É útil em situações onde o 
    número de campos do formulário pode variar, como em tabelas editáveis ou 
    formulários que dependem de dados dinâmicos do backend.*/
    return this.profileForm.get('nicknames') as FormArray
  }

  preencherFormulario() {
    /*patchValue é usado para atualizar valores de um formulário reativo 
    (Reactive Form). Ele permite que você atualize apenas um subconjunto dos 
    controles do formulário, ao contrário do método setValue, que exige que 
    todos os controles sejam atualizados de uma vez.*/
    this.profileForm.patchValue({
      name: 'Renato',
      cpf: '068.926.080-60',
      address: {
        street: 'R das Cicas',
        city: 'Jundiaí',
        state: 'SP',
        zip: '90640100'
      }
    });
  } 

  /*"push" é utilizado para inserir dinâmicamente os apelidos do FormArray*/
  adicionarApelido() {
    this.apelidos.push(this.formBuilder.control(''));
  }

  submitForm() {
    console.warn(this.profileForm.value);
  }
}

