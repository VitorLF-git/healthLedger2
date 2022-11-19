import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class LabsService {

  constructor(private commonService: CommonService) { }

  getLabs() {
    return this.commonService.get('https://fiapexercicio3.herokuapp.com/laboratorios/');
  }

  getLab(id: string) {
    return this.commonService.get('https://fiapexercicio3.herokuapp.com/laboratorios/' + id);
  }

  createLab(lab: any) {
    return this.commonService.post('https://fiapexercicio3.herokuapp.com/laboratorios/', lab);
  }

  updateLab(lab: { id: string; }) {
    return this.commonService.put('https://fiapexercicio3.herokuapp.com/laboratorios/' + lab.id, lab);
  }

  deleteLab(id: string) {
    return this.commonService.delete('https://fiapexercicio3.herokuapp.com/laboratorios/' + id);
  }

  getLocalLabs() {
    return JSON.parse(localStorage.getItem('labs')!) || [];
  }
  

}