import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs';
import { EditarModalComponent } from 'src/app/modal/editar-modal/editar-modal.component';
import { MedicamentosService } from 'src/app/services/medicamentos.service';

export interface Medicamento {
  id?: number;
  nome: string;
  quantidade: string;
  hospital: string;
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

  constructor(private medicamentosService: MedicamentosService, public dialog: MatDialog) { };

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
  openDialog(element: any) {
    console.log(element);
    
    let resultDialog = this.dialog.open(EditarModalComponent, {
      data: {
        id: 2,
        tipo: 'Medicamento',
        idDatabase: element.id,
        nome: element.nome,
        quantidade: element.quantidade,
        hospital: element.hospital
      },
    });
    resultDialog.afterClosed().pipe(
      take(1),
    ).subscribe((result) => {
      if(result){
        this.refresh();
      }
    });
  }
}
