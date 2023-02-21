import { Ait } from './../ait.model';
import { Component, OnInit } from '@angular/core';
import { AitService } from '../ait.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-ait-delete',
  templateUrl: './ait-delete.component.html',
  styleUrls: ['./ait-delete.component.css']
})
export class AitDeleteComponent implements OnInit {

  ait: Ait = {
    serie: '',
    numero: null,
    placa: '',
    marca: '',
    tipo_veiculo: '',
    cor_veiculo: ''
  }

  constructor(private aitService: AitService, private router: Router, private route: ActivatedRoute) {

  }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.aitService.readById(id!).subscribe(ait => {
      this.ait = ait
    })

  }

  deleteAit(): void{
    this.aitService.delete(this.ait.id!).subscribe(() => {
      this.aitService.showMessage("AIT deletado!");
      this.router.navigate(["/ait"])
  })}

  cancel(): void{
    this.router.navigate(["/ait"])
  }

}

