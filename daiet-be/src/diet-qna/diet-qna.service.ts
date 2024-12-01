import { PromptTemplate } from '@langchain/core/prompts';
import { Injectable } from '@nestjs/common';
import { DietPlan } from 'src/diet-generator/diet-generator.model';
import { LlmService } from 'src/llm/llm.service';
import { DIET_QNA_PROMPT } from './diet-qna.prompt';
import { Conversation } from './diet-qna.model';

@Injectable()
export class DietQnaService {

    constructor(
        private readonly LlmService: LlmService
    ) {

    }

    // Da testare;
    async askQuestion(diet: DietPlan, history: Conversation, question: string): Promise<any> {

        const {llm} = this.LlmService;
        let computedHistory = history;

        if (history.length > 3) {
            computedHistory = history.slice(-3);
        }

        console.log('computedHistory', computedHistory);

        const prompt = await PromptTemplate.fromTemplate(DIET_QNA_PROMPT).format({
            'diet_plan': JSON.stringify(diet, null, 2),
            'history': JSON.stringify(history, null, 2),
            'question': JSON.stringify(question, null, 2),
        })

        console.log('prompt', prompt);

        const answer = await llm.invoke(prompt);
        return { content: answer.content};
    }

}
