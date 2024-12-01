import { Controller, Get } from '@nestjs/common';
import { DISEASES_DATA } from 'src/mock-database/diseases';
import { MEDICATIONS_DATA } from 'src/mock-database/medications';
@Controller('typological')
export class TypologicalController {
  @Get('diseases')
  async getDiseases() {
    return DISEASES_DATA;
  }

  @Get('medications')
  async getMedications() {
    return MEDICATIONS_DATA;
  }
}
