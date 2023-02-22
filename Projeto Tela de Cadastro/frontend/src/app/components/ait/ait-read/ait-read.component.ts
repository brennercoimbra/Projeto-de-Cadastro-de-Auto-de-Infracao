import { MatPaginator } from '@angular/material/paginator';
import { AitService } from './../ait.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Ait } from '../ait.model';

@Component({
  selector: 'app-ait-read',
  templateUrl: './ait-read.component.html',
  styleUrls: ['./ait-read.component.css']
})
export class AitReadComponent implements OnInit {

  aits!: Ait[]

  displayedColumns = ['id', 'serie', 'numero', 'placa', 'data', 'action']




  constructor(private aitService:AitService){}

  ngOnInit(): void {
    this.aitService.read().subscribe(aits => {
      this.aits = aits
      console.log(aits)
    })
  }

}
