/*O customer de "models" nada tem haver com customer-list e customer-details,
apenas se foi dado esse nome para construir uma  classe de clientes, já que
"customer" por muitas vezes é utilizado como um termo de convenção para
trabalhar com mecânicas de usúarios/clientes.*/
export class Customer {
    
    constructor(
        public id: number | null, 
        public name: string, 
        public cpf: string,
        public genero?: string
    ) {

    }
}