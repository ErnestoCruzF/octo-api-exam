import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { UserDto, CreateUserDto, UpdateUserDto, User } from '../../models/user';
import {  Person } from '../../models/person';

@Injectable()
export class UserService {
    constructor(
        @InjectModel('User') private userModel: Model<User>,
        @InjectModel('Person') private personModel: Model<Person>
        ){}

    async getAll(): Promise<User[]> {
        const users = await this.userModel.find().exec()
        return users;
    }

    async get(id:string): Promise<User>{
        const user = await this.userModel.findById(id).exec()
        return user;
    }

    async create(createUserDto: CreateUserDto): Promise<User>{
        const newUser: UserDto = new UserDto({
            email: createUserDto.email,
            password: createUserDto.password,
            system_status_id: 2,
            confirmation_code: "laskjdhfasdf",
            confirmed_at: new Date(),
            accepted_conditions_at: new Date(),
            created_at: new Date(),
            updated_at: new Date(),
            registration_method: "api",
            token: "asdflkjahsdf",
            recovery_password_code: "asldkfjhasdf"
        });
        const createdUser = new this.userModel(newUser);
        return await createdUser.save();
    }

    async update(id: string, user: UpdateUserDto): Promise<User>{
        user.updated_at = new Date();
        const userUpdated = await this.userModel.findByIdAndUpdate(id, user, {new: true});
        return userUpdated
    }

    async delete(id: string): Promise<User> {
        const userDeleted = await this.userModel.findByIdAndDelete(id);
        if (userDeleted){
            const personUpdated = await this.personModel.findByIdAndUpdate(userDeleted.id, {user_id: ""}, {new: true})
        }
        return userDeleted;
    }

    async emailRegistered(email: string): Promise<boolean>{
        const user = await this.userModel.findOne({'email': email}).exec();
        return user === null ? false : true;
    }
}
