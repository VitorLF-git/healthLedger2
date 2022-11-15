import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  nome: string;
  position: number;
  quantidade: number;
  hospital: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, nome: 'Medicamento 1', quantidade: 152, hospital: 'Hcor'},
  {position: 2, nome: 'Medicamento 2', quantidade: 20, hospital: 'Hcor'},
  {position: 3, nome: 'Medicamento 3', quantidade: 20, hospital: 'Hcor'},
  {position: 4, nome: 'Medicamento 4', quantidade: 20, hospital: 'Hcor'},
  {position: 5, nome: 'Medicamento 5', quantidade: 20, hospital: 'Hcor'},
  {position: 6, nome: 'Medicamento 6', quantidade: 20, hospital: 'Hcor'},
  {position: 7, nome: 'Medicamento 7', quantidade: 20, hospital: 'Hcor'},
  {position: 8, nome: 'Medicamento 8', quantidade: 20, hospital: 'Hcor'},
  {position: 9, nome: 'Medicamento 9', quantidade: 20, hospital: 'Hcor'},
  {position: 10, nome: 'Medicamento 10', quantidade: 20, hospital: 'Hcor'},
];

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.css']
})
export class LabsComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['position', 'nome', 'quantidade', 'hospital'];
  dataSource = ELEMENT_DATA;
  
  ngOnInit(): void {
  }

}


