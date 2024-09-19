import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private authSerivce: AuthService) {
    
  }

  podeAcessar: boolean = false;

  ngOnInit() {

  this.podeAcessar = this.authSerivce.podeAcessar();
  }

  alterarAcesso(e: any) {

    /*target: Refere-se ao elemento que disparou o evento. Por exemplo, se o evento foi um clique em um checkbox, target será o próprio 
    checkbox.
    checked: É uma propriedade do elemento checkbox que indica se ele está marcado (true) ou não (false).
    Portanto, e.target.checked está acessando a propriedade checked do elemento que disparou o evento, e 
    this.authService.update(e.target.checked); está passando esse valor para o método update do serviço authService.*/
    this.authSerivce.update(e.target.checked);
  }
}
