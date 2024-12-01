import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
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

    return this.httpClient.post<{content: string}>(`${this._baseUrl}/ask`, payload).pipe(
      tap(res => console.log(res)),
      map(res => ({
        content: res.content,
        isUser: false,
        timestamp: new Date()
      }))
    );
    
  }
}
