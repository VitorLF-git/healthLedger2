import { Component, OnInit } from '@angular/core';
import { MedicamentosService } from 'src/app/services/medicamentos.service';

export interface Medicamento {
  position?: number;
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

  displayedColumns: string[] = ['position', 'nome', 'quantidade', 'hospital', 'actions'];
  dataSource = [];
  constructor(private medicamentosService: MedicamentosService) { }

  ngOnInit(): void {
    this.medicamentosService.getMedicamentos().subscribe((data: any) => {
      console.log(data);
      this.dataSource = data;
    });
  }

}
