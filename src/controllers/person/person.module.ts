import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserModule } from '../../controllers/user/user.module';
import { CompanyModule } from '../../controllers/company/company.module';

import { PersonController } from '../../controllers/person/person.controller';
import { PersonService } from '../../services';

import { PersonSchema } from '../../models/person';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Person', schema: PersonSchema }]), UserModule, CompanyModule],
    controllers: [PersonController],
    providers: [PersonService],
    exports:[PersonService]
})
export class PersonModule {}
