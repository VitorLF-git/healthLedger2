import { Component, OnInit } from '@angular/core';
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

  constructor(private labsService: LabsService) { }

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
}


