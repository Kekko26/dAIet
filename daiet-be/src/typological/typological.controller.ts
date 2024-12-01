import { Controller, Get } from '@nestjs/common';
import { DISEASES_DATA } from 'src/mock-database/diseases';

@Controller('typological')
export class TypologicalController {

    @Get('diseases')
    async getDiseases(){
        return DISEASES_DATA;
    }

    @Get('medications')
    async getMedications(){
        return DISEASES_DATA;
    }
    
}
