import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { LlmService } from 'src/llm/llm.service';
import { PromptTemplate } from "@langchain/core/prompts";
import { ADAPT_TO_MEDICATIONS_OUTPUT_EXAMPLE, ADAPT_TO_MEDICATIONS_PROMPT, DIET_GENERATOR_OUTPUT_EXAMPLE, DIET_GENERATOR_PROMPT } from './prompt';
import { DietPlan, DietRequest, UserParameters } from './diet-generator.model';
import { StructuredOutputParser } from '@langchain/core/dist/output_parsers';
import { MedicationDTO } from 'src/mock-database/medications';

@Injectable()
export class DietGeneratorService {

    constructor(
        private readonly llmService: LlmService
    ) { }

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
            food_to_avoid: data?.diseases?.map(d => d.restricted_foods).join(', ') + ', ' + data?.allergens.join(', '),
        });

        const response = await llm.invoke(prompt + '\n' + DIET_GENERATOR_OUTPUT_EXAMPLE);
        const plan = this._cleanMealPlan(response.content as string);
        const fullPlan = await this._insertMedicine({
            medications: data.medications,
            dietPlan: plan,
        });
        return JSON.parse(fullPlan as string);
    }

    private _cleanMealPlan(response: string): any {
        const regex = /\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\}/g;
        const matches = response.match(regex);
        if (!matches || matches.length === 0) {
            throw new Error('No valid JSON found in response');
        }
        return JSON.parse(matches[0]);
    }

    private async _insertMedicine(
        data: {
            medications: MedicationDTO[];
            dietPlan: DietPlan;
        }
    ) {
        const medStr = data.medications.map(medication => this._parseMedication(medication)).join('\n');
        const planStr = JSON.stringify(data.dietPlan, null, 2);

        const prompt = await PromptTemplate.fromTemplate(ADAPT_TO_MEDICATIONS_PROMPT).format({
            list_of_medications: medStr,
            meal_plan: planStr,
        });

        const response = await this.llmService.llm.invoke(prompt + '\n' + ADAPT_TO_MEDICATIONS_OUTPUT_EXAMPLE);
        return response.content;
    }

    private _parseMedication(
        medication: MedicationDTO
    ) {
        return `
            Name: ${medication.name},
            Frequency: ${medication?.frequency},
            Additional Info: ${medication.interactions},
        `;
    };

}
