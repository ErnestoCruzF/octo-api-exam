import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CompanyDto {
    @ApiProperty()
    _id?: string;

    @ApiProperty()
    legal_name: string;

    @ApiProperty()
    short_name: string;

    @ApiProperty()
    account_name: string;

    @ApiProperty()
    logo: string;

    @ApiProperty()
    cover: string;

    @ApiProperty()
    created_at: Date;

    @ApiProperty()
    updated_at: Date;

    constructor(newCompany: CompanyDto){
        this._id = newCompany._id;
        this.legal_name= newCompany.legal_name;
        this.short_name= newCompany.short_name;
        this.account_name= newCompany.account_name;
        this.logo= newCompany.logo;
        this.cover= newCompany.cover;
        this.created_at= newCompany.created_at;
        this.updated_at= newCompany.updated_at;
    }
}

export class CreateCompanyDto {
    @ApiProperty()
    email: string;

    @ApiProperty()
    legal_name: string;

    @ApiProperty()
    short_name: string;

    @ApiProperty()
    account_name: string;

    @ApiProperty()
    logo: string;

    @ApiProperty()
    cover: string;
}

export class UpdateCompanyDto extends PartialType(CreateCompanyDto){
    @ApiProperty()
    email: string;

    @ApiProperty()
    legal_name: string;

    @ApiProperty()
    short_name: string;

    @ApiProperty()
    account_name: string;

    @ApiProperty()
    logo: string;

    @ApiProperty()
    cover: string;

    @ApiProperty()
    updated_at: Date;

}
