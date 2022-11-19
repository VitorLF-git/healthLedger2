import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs';
import { ApagarModalComponent } from 'src/app/modal/apagar-modal/apagar-modal.component';
import { EditarModalComponent } from 'src/app/modal/editar-modal/editar-modal.component';
import { LabsService } from 'src/app/services/labs.service';

export interface Lab {
  nome: string;
  id?: number;
  endereco: string;
}

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.css']
})
export class LabsComponent implements OnInit {

  constructor(private labsService: LabsService, public dialog: MatDialog) { }

  displayedColumns: string[] = ['nome', 'endereco', 'actions'];
  dataSource = []
  rotating = false;
  cadastrar = false;

  ngOnInit(): void {
    this.dataSource = this.labsService.getLocalLabs();
  }


  refresh() {
    this.rotating = true;
    this.labsService.getLabs().subscribe((data: any) => {
      localStorage.setItem('labs', JSON.stringify(data));
      this.dataSource = data;
      this.rotating = false;
    });
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
        id: 1,
        tipo: 'Laboratório',
        idDatabase: element.id,
        nome: element.nome,
        endereco: element.endereco
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


