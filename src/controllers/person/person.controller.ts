import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { PersonDto, CreatePersonDto, UpdatePersonDto, Person } from '../../models/person';
import { PersonService, UserService, CompanyService } from '../../services';

@ApiTags('person')
@Controller('person')
export class PersonController {
    constructor(
        private readonly personService: PersonService,
        private readonly userService: UserService,
        private readonly companyService: CompanyService
    ) {}

    @Get()
    @ApiResponse({
        status: 200,
        description: 'Get all persons.',
        type: [PersonDto],
    })
    async getAll(): Promise<Person[]> {
        return await this.personService.getAll();
    }

    @Get(':id')
    @ApiResponse({
        status: 200,
        description: 'Get person by id.',
        type: PersonDto,
    })
    async get(@Param('id') id: string): Promise<Person> {
        return await this.personService.get(id);
    }

    @Post()
    @ApiResponse({
        status: 200,
        description: 'The person has been successfully created.',
        type: PersonDto
    })
    async create(@Body() createPersonDto: CreatePersonDto): Promise<Person>{
        let personCreated: Person;
        const user = await this.userService.get(createPersonDto.user_id);
        const company = await this.companyService.get(createPersonDto.company_id);
        let exist = true;
        if (!user){
            exist = false;
        }
        if (!company){
            exist = false;
        }
        if (exist){
            personCreated = await this.personService.create(createPersonDto);
        }
        return personCreated
    }

    @Put(':id')
    @ApiResponse({
        status: 200,
        description: 'The person has been successfully updated.',
        type: PersonDto
    })
    async update(@Param('id') id: string, @Body() PersonDto: UpdatePersonDto): Promise<Person> {
        return this.personService.update(id, PersonDto)
    }

    @Delete(':id')
    @ApiResponse({
        status: 200,
        description: 'The person has been successfully deleted.',
        type: PersonDto
    })
    async delete(@Param('id') id: string): Promise<Person> {
        return this.personService.delete(id)
    }
}
