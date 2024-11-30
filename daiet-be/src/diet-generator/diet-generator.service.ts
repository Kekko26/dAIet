import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { LlmService } from 'src/llm/llm.service';
import { PromptTemplate } from "@langchain/core/prompts";
import { DIET_GENERATOR_PROMPT } from './prompt';
import { DietRequest, UserParameters } from './diet-generator.model';

@Injectable()
export class DietGeneratorService {

    constructor(
        private readonly config: ConfigService,
        private readonly llmService: LlmService
    ) { }

    async generateDiet(
        data: DietRequest
    ) {

        const llm = this.llmService.llm;

        const { configuration, furtherIndications = '' } = data;

        const template = PromptTemplate.fromTemplate(DIET_GENERATOR_PROMPT);
        const prompt = await template.format({
            age: configuration.age,
            weight: configuration.weight,
            height: configuration.height,
            medications: JSON.stringify(configuration.medications, null, 2),
            goal: configuration.goal,
            
        });

        const response =  await llm.invoke(prompt);
        return this._cleanResponse(response.content as string);
    }

    private _cleanResponse(response: string): any {
        const cleanedResponse = response.replace(/\\n/g, '').replace(/\\"/g, '"');
        return JSON.parse(cleanedResponse);
    }

}
