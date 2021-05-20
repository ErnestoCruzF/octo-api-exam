import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserModule } from './controllers/user/user.module';
import { CompanyModule } from './controllers/company/company.module';
import { PersonModule } from './controllers/person/person.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongo/Octopy', {useNewUrlParser: true, useFindAndModify: false}),
    UserModule,
    CompanyModule,
    PersonModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
