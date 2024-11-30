import { Controller, Get, Query } from '@nestjs/common';
import { LlmService } from './llm.service';

@Controller('llm')
export class LlmController {

    constructor(
        private readonly llmService: LlmService
    ) { }

    @Get('test')
    async test(
        @Query('input') input: string
    ) {
        const { llm } = this.llmService;
        const response = await llm.invoke(input);
        return response;
    }



}
