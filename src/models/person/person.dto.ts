import { ApiProperty, PartialType } from '@nestjs/swagger';

export class PersonDto {
    @ApiProperty()
    _id?: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    first_name: string;

    @ApiProperty()
    last_name: string;

    @ApiProperty()
    company_id: string;

    @ApiProperty()
    user_id: string;

    @ApiProperty()
    created_at: Date;

    @ApiProperty()
    updated_at: Date;

    constructor(newPerson: PersonDto){
        this._id = newPerson._id;
        this.name= newPerson.name,
        this.first_name= newPerson.first_name,
        this.last_name= newPerson.last_name,
        this.company_id= newPerson.company_id,
        this.user_id= newPerson.user_id,
        this.created_at= newPerson.created_at,
        this.updated_at= newPerson.updated_at
    }
}

export class CreatePersonDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    first_name: string;

    @ApiProperty()
    last_name: string;

    @ApiProperty()
    company_id: string;

    @ApiProperty()
    user_id: string;
}

export class UpdatePersonDto extends PartialType(CreatePersonDto){

    @ApiProperty()
    name: string;

    @ApiProperty()
    first_name: string;

    @ApiProperty()
    last_name: string;

    @ApiProperty()
    company_id: string;

    @ApiProperty()
    user_id: string;

    @ApiProperty()
    updated_at: Date;

}
