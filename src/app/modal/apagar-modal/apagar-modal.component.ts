import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { take } from 'rxjs';
import { LabsService } from 'src/app/services/labs.service';
import { MedicamentosService } from 'src/app/services/medicamentos.service';
import { DialogData } from '../editar-modal/editar-modal.component';

@Component({
  selector: 'app-apagar-modal',
  templateUrl: './apagar-modal.component.html',
  styleUrls: ['./apagar-modal.component.css']
})
export class ApagarModalComponent implements OnInit {

  id: 1 | 2;
  tipo: string;
  nome: string;
  rotating = false;
  finalizado = false;
  idDatabase: number = 0;

  laboratorios: any = [];
  loading = false;
   

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, private labService: LabsService, private medicamentoService: MedicamentosService) {
    this.id = data.id;
    this.tipo = data.tipo;
    this.nome = data.nome;
    this.idDatabase = data.idDatabase;

  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.loading = true;
    let idDelete = JSON.stringify(this.idDatabase);
    if (this.id == 1) { 
      this.labService.deleteLab(idDelete).pipe(
        take(1),
      ).subscribe(() => {
        this.loading = false;
        this.finalizado = true;
      });
    }
    else if (this.id == 2) {
      this.medicamentoService.deleteMedicamento(idDelete).pipe(
        take(1),
      ).subscribe(() => {
        this.loading = false;
        this.finalizado = true;
      });
    }
  }

}
