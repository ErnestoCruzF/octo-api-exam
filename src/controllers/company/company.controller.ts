import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { CompanyDto, CreateCompanyDto, UpdateCompanyDto, Company } from '../../models/company';
import { CompanyService } from '../../services';

@ApiTags('company')
@Controller('company')
export class CompanyController {
    constructor(private readonly companyService: CompanyService) {}

    @Get()
    @ApiResponse({
        status: 200,
        description: 'Get all Companys.',
        type: [CompanyDto],
    })
    async getAll(): Promise<Company[]> {
        return this.companyService.getAll();
    }

    @Get(':id')
    @ApiResponse({
        status: 200,
        description: 'Get company by id.',
        type: CompanyDto,
    })
    get(@Param('id') id: string): Promise<Company> {
        return this.companyService.get(id);
    }

    @Post()
    @ApiResponse({
        status: 200,
        description: 'The company has been successfully created.',
        type: CompanyDto
    })
    async create(@Body() createCompanyDto: CreateCompanyDto): Promise<Company> {
        return this.companyService.create(createCompanyDto);
    }

    @Put(':id')
    @ApiResponse({
        status: 200,
        description: 'The company has been successfully updated.',
        type: CompanyDto
    })
    async update(@Param('id') id: string, @Body() CompanyDto: UpdateCompanyDto): Promise<Company> {
        return this.companyService.update(id, CompanyDto)
    }

    @Delete(':id')
    @ApiResponse({
        status: 200,
        description: 'The company has been successfully deleted.',
        type: CompanyDto
    })
    async delete(@Param('id') id: string): Promise<Company> {
        return this.companyService.delete(id)
    }
}
