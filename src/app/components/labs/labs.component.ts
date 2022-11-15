import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  nome: string;
  position: number;
  endereco: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, nome: 'Laboratório 1', endereco: 'rua 123, sao paulo, sp'},
  {position: 2, nome: 'Laboratório 2', endereco: 'rua 123, sao paulo, sp'},
  {position: 3, nome: 'Laboratório 3', endereco: 'rua 123, sao paulo, sp'},
  {position: 4, nome: 'Laboratório 4', endereco: 'rua 123, sao paulo, sp'},
  {position: 5, nome: 'Laboratório 5', endereco: 'rua 123, sao paulo, sp'},
  {position: 6, nome: 'Laboratório 6', endereco: 'rua 123, sao paulo, sp'},
  {position: 7, nome: 'Laboratório 7', endereco: 'rua 123, sao paulo, sp'},
  {position: 8, nome: 'Laboratório 8', endereco: 'rua 123, sao paulo, sp'},
  {position: 9, nome: 'Laboratório 9', endereco: 'rua 123, sao paulo, sp'},
  {position: 10, nome: 'Laboratório 10', endereco: 'rua 123, sao paulo, sp'},
];

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.css']
})
export class LabsComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['position', 'nome', 'endereco', 'actions'];
  dataSource = ELEMENT_DATA;
  
  ngOnInit(): void {
  }

}


