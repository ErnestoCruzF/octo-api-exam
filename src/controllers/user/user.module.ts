import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserController } from '../../controllers/user/user.controller';
import { UserService } from '../../services';

import { UserSchema } from '../../models/user';
import { PersonSchema } from '../../models/person'

@Module({
    imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }, { name: 'Person', schema: PersonSchema }])],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService]
})
export class UserModule {}
