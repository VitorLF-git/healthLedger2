import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class MedicamentosService {

  constructor(private commonService: CommonService) { }

  getMedicamentos() {
    return this.commonService.get('https://fiapexercicio3.herokuapp.com/medicamentos/');
  }

  getMedicamento(id: string) {
    return this.commonService.get('https://fiapexercicio3.herokuapp.com/medicamentos/' + id);
  }

  createMedicamento(medicamento: any) {
    return this.commonService.post('https://fiapexercicio3.herokuapp.com/medicamentos/', medicamento);
  }

  updateMedicamento(medicamento: { id: string; }) {
    return this.commonService.put('https://fiapexercicio3.herokuapp.com/medicamentos/' + medicamento.id, medicamento);
  }

  deleteMedicamento(id: string) {
    return this.commonService.delete('https://fiapexercicio3.herokuapp.com/medicamentos/' + id);
  }

  getLocalMedicamentos() {
    return JSON.parse(localStorage.getItem('medicamentos') || '[]');
  }
}
