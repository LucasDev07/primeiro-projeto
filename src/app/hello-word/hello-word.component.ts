import { Component } from '@angular/core';
import { FilhoAComponent } from "../filho-a/filho-a.component";
import { FilhoBComponent } from "../filho-b/filho-b.component";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hello-word',
  standalone: true,
  imports: [FilhoAComponent, FilhoBComponent, RouterModule, CommonModule],
  templateUrl: './hello-word.component.html',
  styleUrl: './hello-word.component.css'
})
export class HelloWordComponent {

  textoVaiProFilho: string = '';

  textoVeioDoFilho: string = '';
}
