import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { finalize, catchError } from 'rxjs';
import { DietQnaServiceTsService } from 'src/app/core/services/diet-qna.service.ts.service';
import { Conversation, Message } from 'src/app/shared/model/conversation.model';
import { DietPlan } from 'src/app/shared/model/diet-generator.model';

const STORAGE_KEY = 'conversation';

@Component({
  selector: 'app-conversation',
  standalone: true,
  imports: [
    AvatarModule,
    CardModule,
    CommonModule,
    InputTextModule,
    ProgressSpinnerModule
  ],
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {
  @Input() dietPlan?: DietPlan;

  private readonly conversationService = inject(DietQnaServiceTsService);
  
  messages: Message[] = [];
  loadingResponse = false;

  ngOnInit(): void {
    this.loadStoredConversation();
  }

  private loadStoredConversation(): void {
    const storedConversation = sessionStorage.getItem(STORAGE_KEY);
    if (storedConversation) {
      this.messages = JSON.parse(storedConversation);
    }
  }

  private saveConversation(): void {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(this.messages));
  }

  private transformToConversation(messages: Message[]): Conversation {
    return messages.reduce<Conversation>((conversation, message, index, array) => {
      if (message.isUser && index + 1 < array.length && !array[index + 1].isUser) {
        conversation.push({
          question: message.content,
          answer: array[index + 1].content
        });
      }
      return conversation;
    }, []);
  }

  private createMessage(content: string, isUser: boolean): Message {
    return {
      content,
      isUser,
      timestamp: new Date()
    };
  }

  onEnter(event: any): void {
    const question = event.target.value.trim();
    if (!question || !this.dietPlan) return;
    event.target.value = '';
    this.handleQuestion(question);
  }

  private handleQuestion(question: string): void {
    if (!this.dietPlan) return;

    const history = this.transformToConversation(this.messages);
    this.addMessage(question, true);
    this.requestAnswer(question, history, this.dietPlan);
  }

  private addMessage(content: string, isUser: boolean): void {
    this.messages.push(this.createMessage(content, isUser));
    this.saveConversation();
  }

  private requestAnswer(question: string, history: Conversation, dietPlan: DietPlan): void {
    this.loadingResponse = true;
    this.addMessage('[LOADING]', false);

    this.conversationService.askQuestion(dietPlan, history, question)
      .pipe(
        finalize(() => this.loadingResponse = false),
        catchError(error => {
          this.handleError(error);
          throw error;
        })
      )
      .subscribe(response => {
        this.updateLastMessage(response.content);
      });
  }

  private updateLastMessage(content: string): void {
    if (this.messages.length > 0) {
      this.messages[this.messages.length - 1].content = content;
      this.saveConversation();
    }
  }

  private handleError(error: any): void {
    console.error('Error in conversation:', error);
    this.updateLastMessage('Sorry, there was an error processing your request.');
  }
}