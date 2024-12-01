import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DiseaseDTO, MedicationDTO } from 'src/app/shared/model/typological.model';

@Injectable({
  providedIn: 'root'
})
export class TypologicalService {

  private _baseUrl = 'http://localhost:3000/typological';
  private readonly httpClient = inject(HttpClient);


  getDiseases(): Observable<DiseaseDTO[]> {
    return this.httpClient.get<DiseaseDTO[]>(`${this._baseUrl}/diseases`);
  };

  getMedications(): Observable<MedicationDTO[]> {
    return this.httpClient.get<MedicationDTO[]>(`${this._baseUrl}/medications`);
  }
  
}
