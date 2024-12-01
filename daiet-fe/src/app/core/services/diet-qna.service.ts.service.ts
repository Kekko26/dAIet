import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Conversation, Message } from 'src/app/shared/model/conversation.model';
import { DietPlan } from 'src/app/shared/model/diet-generator.model';

@Injectable({
  providedIn: 'root'
})
export class DietQnaServiceTsService {

  constructor() { }

  private _baseUrl = 'http://localhost:3000/diet-qna';
  private readonly httpClient = inject(HttpClient);

  
  askQuestion(diet: DietPlan, history: Conversation, question: string): Observable<Message> {
    const payload = {
      diet_plan: diet,
      history,
      question
    };

    return this.httpClient.post<string>(`${this._baseUrl}/ask`, payload).pipe(
      map(res => ({
        content: res,
        isUser: false,
        timestamp: new Date()
      }))
    );
    
  }
}
