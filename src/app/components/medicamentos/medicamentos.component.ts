import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs';
import { ApagarModalComponent } from 'src/app/modal/apagar-modal/apagar-modal.component';
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
  firstLoad = false;

  constructor(private medicamentosService: MedicamentosService, public dialog: MatDialog) { };

  ngOnInit(): void {
    this.dataSource = this.medicamentosService.getLocalMedicamentos();
    if (this.dataSource.length == 0) {
      this.firstLoad = true;
      this.refresh();
    };
  }

  
  openDialog(element: any, action: string) {
    let dialogComponent: any;
    if(action === 'editar'){
      dialogComponent = EditarModalComponent;
    }else if(action === 'apagar'){
      dialogComponent = ApagarModalComponent;
    }
    
    let resultDialog = this.dialog.open(dialogComponent, {
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

  refresh() {
    this.rotating = true;
    this.medicamentosService.getMedicamentos().subscribe((data: any) => {
      localStorage.setItem('medicamentos', JSON.stringify(data));
      this.dataSource = data;
      this.firstLoad = false;
      this.rotating = false;
    });
  }
}
