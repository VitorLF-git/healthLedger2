import { Component, OnInit } from '@angular/core';
import { LabsService } from 'src/app/services/labs.service';

export interface Lab {
  nome: string;
  position: number;
  endereco: string;
}

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.css']
})
export class LabsComponent implements OnInit {

  constructor(private labsService: LabsService) { }

  displayedColumns: string[] = ['position', 'nome', 'endereco', 'actions'];
  dataSource = []
  
  ngOnInit(): void {
    this.labsService.getLabs().subscribe((data: any) => {
      console.log(data);
      
      this.dataSource = data;
    });
  }

}


