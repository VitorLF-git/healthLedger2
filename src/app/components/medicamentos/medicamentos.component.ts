import { Component, OnInit } from '@angular/core';
import { MedicamentosService } from 'src/app/services/medicamentos.service';

export interface Medicamento {
  id?: number;
  nome: string;
  quantidade: string;
  laboratorio: string;
}


@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.component.html',
  styleUrls: ['./medicamentos.component.css']
})
export class MedicamentosComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'quantidade', 'hospital', 'actions'];
  dataSource = [];
  cadastrar = false;
  
  constructor(private medicamentosService: MedicamentosService) { }

  ngOnInit(): void {
    this.medicamentosService.getMedicamentos().subscribe((data: any) => {
      this.dataSource = data;
    });
  }

}
