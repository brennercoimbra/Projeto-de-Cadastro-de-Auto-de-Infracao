import { Component, OnInit } from '@angular/core';
import { AitService } from '../ait.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ait } from '../ait.model';


@Component({
  selector: 'app-ait-update',
  templateUrl: './ait-update.component.html',
  styleUrls: ['./ait-update.component.css']
})
export class AitUpdateComponent implements OnInit{

  ait: Ait = {
    serie: '',
    numero: null,
    placa: '',
    marca: '',
    tipo_veiculo: '',
    cor_veiculo: ''
  }


  constructor(private aitService: AitService, private router:Router, private route:ActivatedRoute){}



  ngOnInit(): void{
    const id = this.route.snapshot.paramMap.get('id')
    this.aitService.readById(id!).subscribe(ait => {
      this.ait = ait
    })
  }

  updateAit(): void{
    this.aitService.update(this.ait).subscribe(() => {
      this.aitService.showMessage('AIT alterado!')
      this.router.navigate(['/ait'])
    })
  }

  cancel(): void{
    this.router.navigate(['/ait'])
  }

}
