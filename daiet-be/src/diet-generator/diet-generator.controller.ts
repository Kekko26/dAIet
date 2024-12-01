import { Body, Controller, Get, Post } from '@nestjs/common';
import { DietGeneratorService } from './diet-generator.service';
import { DietRequest, UserParameters } from './diet-generator.model';

@Controller('diet-generator')
export class DietGeneratorController {

    constructor(
        private dietGenerator: DietGeneratorService
    ) { }

    @Post('generate-diet')
    async test(@Body() body: UserParameters){

        const res = await this.dietGenerator.failSafeDietGeneration(
            body
        );
        
        return res
    }
    

}
