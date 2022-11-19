import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Lab } from 'src/app/components/labs/labs.component';
import { LabsService } from 'src/app/services/labs.service';
import { MedicamentosService } from 'src/app/services/medicamentos.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Medicamento } from 'src/app/components/medicamentos/medicamentos.component';
import { take } from 'rxjs';

export interface DialogData {
  id: 1 | 2;
  idDatabase: number;
  tipo: string;
  nome: string;
  endereco?: string;
  quantidade?: string;
  hospital?: string;
}

@Component({
  selector: 'app-editar-modal',
  templateUrl: './editar-modal.component.html',
  styleUrls: ['./editar-modal.component.css']
})
export class EditarModalComponent implements OnInit {

  id: 1 | 2;
  tipo: string;
  rotating = false;
  finalizado = false;
  idDatabase: number = 0;

  laboratorios: any = [];
  loading = false;
  profileForm = new FormGroup({
    tipo: new FormControl(''),
    nome: new FormControl(''),
    endereco: new FormControl(''),
    quantidade: new FormControl(''),
    hospital: new FormControl(''),
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, private labService: LabsService, private medicamentoService: MedicamentosService) {
    this.id = data.id;
    this.tipo = data.tipo;
    this.profileForm.controls['tipo'].setValue(data.tipo);
    this.profileForm.controls['nome'].setValue(data.nome);
    this.profileForm.controls['endereco'].setValue(data.endereco ?? '');
    this.profileForm.controls['quantidade'].setValue(data.quantidade ?? '');
    this.profileForm.controls['hospital'].setValue(data.hospital ?? '');
    this.idDatabase = data.idDatabase;

  }

  ngOnInit(): void {
    this.laboratorios = this.labService.getLocalLabs();
  }

  onSubmit() {
    this.loading = true;
    if (this.id == 1) {
      let lab: Lab = { nome: this.profileForm.value.nome!, endereco: this.profileForm.value.endereco!, id: this.idDatabase };
      this.labService.updateLab(lab).pipe(
        take(1),
      ).subscribe(() => {
        this.loading = false;
        this.finalizado = true;
      });
    }
    else if (this.id == 2) {
      let medicamento: Medicamento = { nome: this.profileForm.value.nome!, quantidade: this.profileForm.value.quantidade!, hospital: this.profileForm.value.hospital!, id: this.idDatabase };
      this.medicamentoService.updateMedicamento(medicamento).pipe(
        take(1),
      ).subscribe(() => {
        this.loading = false;
        this.finalizado = true;
      });
    }
  }

  refresh() {
    this.rotating = true;
    this.labService.getLabs().subscribe((data: any) => {
      localStorage.setItem('labs', JSON.stringify(data));
      this.laboratorios = data;
      this.rotating = false;
    });
  }
}
