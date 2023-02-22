import { Component, OnInit } from '@angular/core';
import { AitService } from '../ait.service';
import { Router } from '@angular/router';
import { Ait } from '../ait.model';

@Component({
  selector: 'app-ait-cadastro',
  templateUrl: './ait-cadastro.component.html',
  styleUrls: ['./ait-cadastro.component.css']
})
export class AitCadastroComponent implements OnInit{

  ait: Ait = {
    serie: '',
    numero: null,
    placa: '',
    marca: '',
    tipo_veiculo: '',
    cor_veiculo: '',
    cat_veiculo: '',
    esp_veiculo: '',
    munic_veiculo: '',
    data: null,
    hora: null,
    logra: '',
    numero_local: null,
    bairro: '',
    munic_local: ''
  }


  constructor(private aitService: AitService,
    private router: Router) {}


  ngOnInit(): void {
    
  }

  createAit(): void{
    this.aitService.create(this.ait).subscribe(() => {
      this.aitService.showMessage('AIT Cadastrado')
      this.router.navigate(['/ait'])
    })
    
    
  }


  cancel(): void{
    this.router.navigate(['/ait'])
  }
}