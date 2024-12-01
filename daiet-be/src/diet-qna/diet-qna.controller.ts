import { Body, Controller, Post } from '@nestjs/common';
import { DietQnaService } from './diet-qna.service';
import { QuestionDTO } from './diet-qna.model';

@Controller('diet-qna')
export class DietQnaController {

    constructor(
        private readonly dietQnaService: DietQnaService
    ){

    }

    @Post('ask')
    public async askQuestion(
        @Body() body: QuestionDTO 
    ){
        return await this.dietQnaService.askQuestion(
            body.diet_plan,
            body.history,
            body.question
        );

    }
}
