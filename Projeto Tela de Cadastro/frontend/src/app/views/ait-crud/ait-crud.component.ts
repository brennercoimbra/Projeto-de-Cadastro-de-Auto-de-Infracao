import { HeaderService } from './../../components/template/header/header.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ait-crud',
  templateUrl: './ait-crud.component.html',
  styleUrls: ['./ait-crud.component.css']
})
export class AitCrudComponent implements OnInit{

  constructor(private router: Router, private headerService: HeaderService){
    headerService.headerData = {
      title: 'Cadastro de AIT',
      icon: 'post_add',
      routeUrl: '/ait'
    }
  }

  ngOnInit(): void {

  }

  navigateToAitCadastro(){
    this.router.navigate(['ait/cadastrar'])
  }


}
