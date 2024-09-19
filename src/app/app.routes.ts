import { Routes } from '@angular/router';
import { HelloWordComponent } from './hello-word/hello-word.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FilhoAComponent } from './filho-a/filho-a.component';
import { FilhoBComponent } from './filho-b/filho-b.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { guardiaoGuard } from './guardiao.guard';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { WeatherComponent } from './weather/weather.component';
import { PipesComponent } from './pipes/pipes.component';

export const routes: Routes = [
    {path: 'hello-world', title: 'Hello World', component: HelloWordComponent, children: [
        {path: 'filho-a', component: FilhoAComponent},
        {path: 'filho-b', component: FilhoBComponent}
    ]},
    /*CanActivate é uma interface usada para proteger rotas. Ela permite que sejam definas condições que devem ser atendidas antes que uma 
    rota possa ser ativada.*/
    {path: 'data-binding', title: 'Data Binding', component: DataBindingComponent, canActivate: [guardiaoGuard]},
    {path: 'directives', title: 'Directives', component: DirectivesComponent},
    {path: 'customers', title: 'Customers', component: CustomerListComponent},
    {path: 'customer/:id', title: 'Detalhes do Cliente', component: CustomerDetailsComponent},
    {path: 'reactive-form', title: 'Reactive Form', component: ReactiveFormComponent},
    {path: 'template-form', title: 'Template Form', component: TemplateFormComponent},
    {path: 'weather', title: 'Clima', component: WeatherComponent},
    {path: 'pipes', title: 'Pipes', component: PipesComponent},
        /*pathMatch: 'full', indica que a rota rota só será ativada se a URL for exatamente igual ao caminho vazio*/
    {path: '', redirectTo: '/hello-world', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
]