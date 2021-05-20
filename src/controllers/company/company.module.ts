import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CompanyController } from '../../controllers/company/company.controller';
import { CompanyService } from '../../services';

import { CompanySchema } from '../../models/company';
import { PersonSchema } from '../../models/person'

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Company', schema: CompanySchema },{ name: 'Person', schema: PersonSchema }])],
    controllers: [CompanyController],
    providers: [CompanyService],
    exports:[CompanyService]
})
export class CompanyModule {}
