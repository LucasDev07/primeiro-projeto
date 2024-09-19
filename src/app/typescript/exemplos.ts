
import { helloWorld } from "./hello";
import { RandomNumbers, pi , phi, returnPi } from "./math";

/*Validações de tipo em TypeScript são uma forma de garantir que as variáveis, parâmetros de funções e retornos 
de funções correspondam aos tipos esperados. Isso ajuda a detectar erros de tipo durante o desenvolvimento, 
antes mesmo de executar o código, tornando-o mais confiável e menos propenso a bugs*/

/*Exemplo de validação de tipo da const "obj" que é trabalhada dentro da const "area".*/
function calcularArea() {
    const obj = {width: 10, height: 30};

    const area = obj.width * obj.height;
    
    return area;
}


/*Exemplo de validação de típo com base no acesso por "usuario" da propriedade inexistente "cpf", que é negada
como existente no código provocando erro.*/
function usuario() {
    const usuario = {
        nome: "Renato",
        idade: 40
    }

    /*usuario.cpf;*/
}

/*Exemplo de validação de tipo com base na verificação da existência do método random do objeto "Math".*/
function calculo() {
    return Math.random() < 5;
} 

function validacao() {
    const valor = Math.random() < 0.5 ? 'a' : 'b'; 

    if (valor === 'a') {
        //..
    } else if (valor === 'b'){
        //...
    }
}

/*Parametrização das varáveis de callback "pessoa" e "data", que foram tipadas como string.*/
function exibirMensagem(pessoa: string, data: string) {

    console.log(`Olá ${pessoa} hoje é ${data}`);

    return 'teste';
}

exibirMensagem('Renato', '30/01/2024');


/*Definição de variáveis e definição do tipo de variáveis.*/

/*let: tem escopo de bloco, ou seja, só pode ser acessado dentro do bloco {} onde foi declarado.*/
let mensagem: string = 'hello world';

let mensagem2 = 'Hello World';

let number1: number = 3.3;

let number2 = 4;

/*any: é usado para indicar que uma variável pode conter qualquer tipo de valor. Isso significa que você pode 
atribuir a essa variável valores de qualquer tipo, como string, number, boolean, entre outros.*/
let obj: any = {x: 0};


/*exemplo de variável booloeana que retorna verdadeiro ou falso.*/
let isTrue: boolean = false;


/*Definição de tipo em funções.*/

/*"mensagem" (variável do tipo string): é uma variável passada como parâmetro para função . "string" 
apos os "()", é o tipo de retorno da função." "*/
function olaMundo(mensagem:string): string {
    
    return `Olá Mundo ${mensagem}`; 
}

/*object types: são usados para definir a estrutura de objetos, especificando as propriedades que um objeto deve 
ter e os tipos dessas propriedades. Eles são fundamentais para garantir que os objetos usados no código tenham 
a forma esperada, ajudando a evitar erros.*/

/*variável "pt" é um parâmetro definido como um objeto que será passado para a função.*/
function exibirCoordenadas(pt: {x: number, y:number}): string {

        return `${pt.x} ${pt.y}`; 
}


exibirCoordenadas({x:4, y:6});


/*variável "pt" é um parâmetro definido como um objeto que será passado para a função, aonde é tratado no 
bloco "if" e "else" conjuntamente com a variável "mensagem", que será definida de acordo com a presença
da variável "sobrenome".*/

/*"?" é usado para indicar que um parâmetro ou propriedade é opcional. Isso significa que o valor pode estar 
presente ou não*/
function exibirNome(obj: {nome:string, sobrenome?:string}): string {

    let mensagem = '';

    if(obj.sobrenome === undefined) {
        mensagem = `Seu  nome é ${obj.nome}`;
    }
    else
    {
        mensagem = `Seu  nome é ${obj.nome} e o sobrenome é ${obj.sobrenome}`;
    } 

    return mensagem; 
}

    exibirNome({nome: 'Renato'});

    exibirNome({nome: 'Renato', sobrenome: 'Gava'});

    /* Union Types: permitem que uma variável ou função aceite valores de diferentes tipos. Isso é útil quando se 
    quer que uma variável possa ser, por exemplo, um número ou uma string.*/
   function exibirIds(id: number | string) {

        let mensagem = '';

        if(typeof id === 'number') {
            mensagem = 'O seu id númerico é ' + id.toString;
        }
        else {
            mensagem = id.toUpperCase();
        }

        return mensagem;
    }

    exibirIds(3);

    exibirIds('4');

    /*Type Alias: é uma maneira de criar um nome personalizado para um tipo existente. É útil para tornar o 
    código mais legível e fácil de manter. Pode-se usar type aliases para tipos primitivos, objetos, arrays, 
    uniões, interseções e até mesmo outros type aliases.*/
    type Ponto = {
        x: number,
        y: number
    }

    function imprimirPonto(p: Ponto) {

        return `O seu ponto é ${p.x} e ${p.y}`;
    }

    imprimirPonto({x:3, y:5});

    /*Interface: define a estrutura de um objeto, especificando quais propriedades e métodos ele deve ter. 
    Interfaces podem ser estendidas e mescladas.
    Usada para definir contratos para objetos e classes, permitindo a extensibilidade.*/
    interface Numeros {
        a: number,
        b: number
    }

    function imprimirNumeros(p: Numeros) {

        return `O seu ponto é ${p.a} e ${p.b}`;
    }

    imprimirNumeros({a:3, b:5});

    /*Literal Types: permitem especificar valores exatos que uma variável pode ter. Existem três tipos 
    principais de literal types: strings, números e booleanos.*/
    function imprimirTexto(texto: string, alinhamento:'left' | 'right' | 'center') {

    }

    imprimirTexto('meu texto', 'left');

    /*undefined: É o valor padrão para variáveis que foram declaradas, mas não inicializadas. 
    Representa a ausência de valor devido à falta de inicialização.
    null: Indica a ausência intencional de qualquer valor de objeto. É atribuído 
    manualmente para indicar que a variável não aponta para nenhum objeto ou valor.*/
    var teste = null;

    console.log(teste);

    var teste2;

    console.log(teste2);

    /*"!" é usado para indicar ao compilador que uma variável não pode ser nula (null) ou indefinida (undefined) em
     um determinado ponto do código. Isso é útil quando você tem certeza de que um valor será atribuído a uma 
     variável antes de ser usado, mas o compilador não consegue inferir isso por conta própria.*/

    function vivendoPerigosamente(x?: number | null) {
        console.log(x!.toFixed());
    }

    vivendoPerigosamente();


     /*Arrays: listas ordenadas de valores, que permitem armazenar e 
     manipular coleções de elementos do mesmo tipo.*/
     function fazerAlgo(lista: Array<string>) {

     }

     function fazerAlgoTambem(lista: string[]) {

     }

     fazerAlgo(new Array('hello', 'world'));
     
     fazerAlgoTambem(['hello', 'world']);

     /* class: é um modelo para criar objetos com propriedades e métodos, sendo usada para criar instâncias de
      objetos e definir comportamentos.*/
      class Point {
        x: number = 0;
        y: number = 0;
      }

      let p = new Point()
      p.x = 4;
      p.y = 4;

      console.log(`${p.x} ${p.y}`);

      /*constructor: é um método especial de uma classe que é chamado automaticamente quando uma nova instância da 
      classe é criada. Usado para inicializar as propriedades dessa instância.*/
      class BoasVindas {
        mensagem: string; 

        constructor() {
            this.mensagem = 'Bem Vindo';        
        }
        
      }

      let m = new BoasVindas();
      console.log(m.mensagem);

      /*Readonly: permite que o valor de uma variável ou propriedade seja lido, mas não modificado após sua 
      inicialização. Útil para garantir que certos dados permaneçam imutáveis após serem definidos, aumentando a 
      segurança e a integridade do código. Em suma só pode receber valor do constructor.*/
      class Saudacoes {
        readonly mensagem: string;
        
        constructor() {
            this.mensagem = 'Muito bem-vindo';
        }

        preencherMensagem() {
            /*this.mensagem('Nova mensagem'); -> ocorre erro pois "mensagem" é uma variável readonly 
            (só aceita a atribuição de valor no "constructor".)*/
        }

        dizerOla() {
            /*Métodos: são funções definidas dentro de classes que descrevem comportamentos que as instâncias dessas classes podem executar.*/
            console.log(this.mensagem);
        }

      }

     let s = new Saudacoes()

      /*Getters são usados para obter o valor de uma propriedade. São definidos com a palavra-chave get.
      Um getter é chamado como se fosse uma propriedade, sem parênteses.
      Setters: são usados para definir ou atualizar o valor de uma propriedade. São definidos com a palavra-chave set.
      Um setter é chamado como se fosse uma propriedade, mas com um valor atribuído a ele.*/
      class C {
       private _length = 0;

        get length(): number {

            if(this._length > 0 ) 
                return 100;
            else {
                return this._length;
            }

        }

        set length(value: number) {

            if(value > 10)
            this._length = value;
        } 
    } 

    let c = new C();

    c.length = 100;

    /*implements é usada para garantir que uma classe siga um contrato definido por uma interface. Isso significa que a classe
     deve implementar todos os métodos e propriedades definidos na interface. Se a classe não implementar corretamente a interface, 
     o TypeScript gerará um erro.*/

     interface Pingavel {
        ping(): void;
        value: number;
    }

     class Sonar implements Pingavel {
        
        ping(): void {
            console.log('ping');    
        }

        value: number= 3;
    }

    class Ball implements Pingavel {

        ping(): void {
              
        }

        value: number = 4;
    }

    let sonar = new Sonar();

    
    /*extends: é usada para implementar herança, permitindo que uma classe ou interface herde propriedades e métodos de outra classe 
    ou interface. Isso é útil para reutilizar código e criar estruturas mais organizadas e eficientes.*/
    class Animal {
       protected andar() {
            console.log('animal andando');
       }
            constructor() {
             this.andar();
       }

    }

    class Cachorro extends Animal {
       public latir() {
            console.log('au', 'au');

            this.andar();
        }
        
        constructor() {           
            /*super() é usada dentro de uma classe derivada (subclasse) para chamar o construtor da classe base (superclasse). É 
            necessário quando se está estendendo uma classe e precisa inicializar a parte da classe base.*/
            super();
            this.latir();
        }
    }
     
    let viraLata = new Cachorro();


    /*FORMA DE ACESSO AS PROPRIEDADES E MÉTODOS DE UMA CLASSE:*/

   /*Public: todos os membros de uma classe são públicos. Isso significa que eles podem ser acessados de qualquer lugar sem restrições.*/
     
   /*Protected: os membros protegidos são semelhantes aos privados, mas podem ser acessados em subclasses.*/

   /*Private: : Os membros privados só são acessíveis dentro da própria classe. Qualquer tentativa de acessar membros privados fora da 
   classe resultará em um erro de compilação.*/

   helloWorld();

   let r = new RandomNumbers();

   console.log(pi);