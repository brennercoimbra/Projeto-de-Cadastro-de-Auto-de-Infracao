import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent} from '../app/views/home/home.component'
import { AitCrudComponent} from '../app/views/ait-crud/ait-crud.component'

import { AitCadastroComponent } from './components/ait/ait-cadastro/ait-cadastro.component';
import { AitUpdateComponent } from './components/ait/ait-update/ait-update.component';
import { AitDeleteComponent } from './components/ait/ait-delete/ait-delete.component';

const routes: Routes = [
  {
    path: "",
  component: HomeComponent
},{
  path: "ait",
  component: AitCrudComponent
  },{
    path: "ait/cadastrar",
  component: AitCadastroComponent
  },{
    path: "ait/update/:id",
  component: AitUpdateComponent
  },{
    path: "ait/delete/:id",
  component: AitDeleteComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
