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
  rotating = false;
  cadastrar = false;
  
  constructor(private medicamentosService: MedicamentosService) { }

  ngOnInit(): void {
    this.dataSource = this.medicamentosService.getLocalMedicamentos();
  }

  refresh() {
    this.rotating = true;
    this.medicamentosService.getMedicamentos().subscribe((data: any) => {
      localStorage.setItem('medicamentos', JSON.stringify(data));
      this.dataSource = data;
      this.rotating = false;
    });
  }

}
