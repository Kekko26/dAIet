import { Body, Controller, Get, Post } from '@nestjs/common';
import { DietGeneratorService } from './diet-generator.service';
import { DietRequest } from './diet-generator.model';

@Controller('diet-generator')
export class DietGeneratorController {

    constructor(
        private dietGenerator: DietGeneratorService
    ) { }

    @Post('test')
    async test(@Body() body: DietRequest){
        const res = await this.dietGenerator.generateDiet(
            body
        );
        return res;
    }   
    
}
