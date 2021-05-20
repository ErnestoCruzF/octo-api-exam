import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { PersonDto, CreatePersonDto, UpdatePersonDto, Person } from '../../models/person';

@Injectable()
export class PersonService {
    constructor(@InjectModel('Person') private personModel: Model<Person>){}

    async getAll(): Promise<Person[]> {
        const persons = await this.personModel.find().exec()
        return persons;
    }

    async get(id:string): Promise<Person>{
        const person = await this.personModel.findById(id).exec()
        return person;
    }

    async create(createPersonDto: CreatePersonDto): Promise<Person>{
        const newPerson: PersonDto = new PersonDto({
            name: createPersonDto.name,
            first_name: createPersonDto.first_name,
            last_name: createPersonDto.last_name,
            company_id: createPersonDto.company_id,
            user_id: createPersonDto.user_id,
            created_at: new Date(),
            updated_at: new Date(),
        });
        const createdPerson = new this.personModel(newPerson);
        return await createdPerson.save();
    }

    async update(id: string, Person: UpdatePersonDto): Promise<Person>{
        Person.updated_at = new Date();
        const PersonUpdated = await this.personModel.findByIdAndUpdate(id, Person, {new: true});
        return PersonUpdated
    }

    async delete(id: string): Promise<Person> {
        const PersonDeleted = await this.personModel.findByIdAndDelete(id);
        return PersonDeleted;
    }

    async emailRegistered(email: string): Promise<boolean>{
        const Person = await this.personModel.findOne({'email': email}).exec();
        return Person === null ? false : true;
    }

    async PersonRegistered(id: string): Promise<boolean>{
        const Person = await this.personModel.findOne({id}).exec();
        return Person === null ? false : true;
    }
}