import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { take } from 'rxjs';
import { LabsService } from 'src/app/services/labs.service';
import { MedicamentosService } from 'src/app/services/medicamentos.service';
import { Lab } from '../labs/labs.component';
import { Medicamento } from '../medicamentos/medicamentos.component';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  @Input() public id: number = 0;
  @Input() public tipo: string = 'Escolha um tipo de cadastro';

  @Output() cadastroRealizado = new EventEmitter<string>();

  laboratorios: any = [];

  profileForm = new FormGroup({
    tipo: new FormControl(''),
    nome: new FormControl(''),
    endereco: new FormControl(''),
    quantidade: new FormControl(''),
    hospital: new FormControl(''),
  });

  rotating = false;
  loading = false;
  finished = false;

  constructor(private labService: LabsService, private medicamentoService: MedicamentosService) { }

  ngOnInit(): void {
    this.laboratorios = this.labService.getLocalLabs();
  }

  changeTipo(event: any) {
    this.tipo = event.value;
    this.id = +event.source.id;
  }

  onSubmit() {
    this.loading = true;
    this.finished = false;
    if (this.id == 1) {
      console.log(this.profileForm.value);
      let lab: Lab = { nome: this.profileForm.value.nome!, endereco: this.profileForm.value.endereco! };
      this.labService.createLab(lab).pipe(
        take(1),
      ).subscribe(() => {
        this.cadastroRealizado.emit('Cadastro realizado com sucesso!');
        this.loading = false;
        this.finished = true;
      });
    }
    else if (this.id == 2) {
      let medicamento: Medicamento = { nome: this.profileForm.value.nome!, quantidade: this.profileForm.value.quantidade!, hospital: this.profileForm.value.hospital! };
      this.medicamentoService.createMedicamento(medicamento).pipe(
        take(1),
      ).subscribe(() => {
        this.cadastroRealizado.emit('Cadastro realizado com sucesso!');
        this.loading = false;
        this.finished = true;
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

