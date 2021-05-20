import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { CompanyDto, CreateCompanyDto, UpdateCompanyDto, Company } from '../../models/company';
import {  Person } from '../../models/person';

@Injectable()
export class CompanyService {
    constructor(
        @InjectModel('Company') private companyModel: Model<Company>,
        @InjectModel('Person') private personModel: Model<Person>
    ){}

    async getAll(): Promise<Company[]> {
        const companys = await this.companyModel.find().exec()
        return companys;
    }

    async get(id:string): Promise<Company>{
        const company = await this.companyModel.findById(id).exec()
        return company;
    }

    async create(createCompanyDto: CreateCompanyDto): Promise<Company>{
        const newCompany: CompanyDto = new CompanyDto({
            legal_name: createCompanyDto.legal_name,
            short_name: createCompanyDto.short_name,
            account_name: createCompanyDto.account_name,
            logo: createCompanyDto.logo,
            cover: createCompanyDto.cover,
            created_at: new Date(),
            updated_at: new Date()
        });
        const companyCreated = new this.companyModel(newCompany);
        return await companyCreated.save();
    }

    async update(id: string, company: UpdateCompanyDto): Promise<Company>{
        company.updated_at = new Date();
        const companyUpdated = await this.companyModel.findByIdAndUpdate(id, company, {new: true});
        return companyUpdated
    }

    async delete(id: string): Promise<Company> {
        const companyDeleted = await this.companyModel.findByIdAndDelete(id);
        if (companyDeleted){
            const personUpdated = await this.personModel.findByIdAndUpdate(companyDeleted.id, {user_id: ""}, {new: true})
        }
        return companyDeleted;
    }

}
