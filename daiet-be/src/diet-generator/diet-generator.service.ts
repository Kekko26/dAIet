import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { LlmService } from 'src/llm/llm.service';
import { PromptTemplate } from "@langchain/core/prompts";
import { DIET_GENERATOR_OUTPUT_EXAMPLE, DIET_GENERATOR_PROMPT } from './prompt';
import { DietRequest, UserParameters } from './diet-generator.model';

@Injectable()
export class DietGeneratorService {

    constructor(
        private readonly config: ConfigService,
        private readonly llmService: LlmService
    ) { }

    async _generateDiet(
        data: UserParameters
    ) {

        const llm = this.llmService.llm;

        const template = PromptTemplate.fromTemplate(DIET_GENERATOR_PROMPT);
        const prompt = await template.format({
            age: data.age,
            weight: data.weight,
            height: data.height,
            goal: data.goal,
            food_to_avoid: data?.foodToAvoid || [],
        });

        const response = await llm.invoke(prompt + '\n' + DIET_GENERATOR_OUTPUT_EXAMPLE);
        return this._cleanResponse(response.content as string);
    }

    private _cleanResponse(response: string): any {
        const cleanedResponse = response.replace(/\\n/g, '').replace(/\\"/g, '"').replace(/^```|```$/g, '');
        return JSON.parse(cleanedResponse);
    }

    public async failSafeDietGeneration(data: UserParameters): Promise<any> {
        for (let attempt = 0; attempt < 3; attempt++) {
            try {
                return await this._generateDiet(data);
            } catch (error) {
                console.error(`Error while generating diet, attempt ${attempt + 1}`, error);
                if (attempt === 2) {
                    return {
                        error: 'Error while generating diet',
                        message: error.message,
                    };
                }
            }
        }
    }



}
