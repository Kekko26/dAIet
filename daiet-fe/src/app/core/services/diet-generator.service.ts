import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import {
  DietPlan,
  UserParameters,
} from 'src/app/shared/model/diet-generator.model';

@Injectable({
  providedIn: 'root',
})
export class DietGeneratorService {
  private _baseUrl = 'http://localhost:3000/diet-generator';
  private readonly httpClient = inject(HttpClient);

  generateDiet(body?: UserParameters): Observable<DietPlan> {
    if (sessionStorage.getItem('diet.plan')) {
      return of(JSON.parse(sessionStorage.getItem('diet-plan')!));
    }

    return this.httpClient
      .post<DietPlan>(`${this._baseUrl}/generate`, body)
      .pipe(
        tap((res) => {
          sessionStorage.setItem('diet-plan', JSON.stringify(res));
        })
      );
  }
}
