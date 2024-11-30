import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { LlmService } from 'src/llm/llm.service';

@Injectable()
export class DietGeneratorService {

    constructor(
        private readonly config: ConfigService,
        private readonly llmService: LlmService
    ) { 

    }

    // TODO => Implementare generazione dieta;
}
