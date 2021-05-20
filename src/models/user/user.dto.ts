import { ApiProperty, PartialType } from '@nestjs/swagger';

export class UserDto {
    @ApiProperty()
    _id?: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    system_status_id: number;

    @ApiProperty()
    confirmation_code: string;

    @ApiProperty()
    confirmed_at: Date;

    @ApiProperty()
    accepted_conditions_at: Date;

    @ApiProperty()
    created_at: Date;

    @ApiProperty()
    updated_at: Date;

    @ApiProperty()
    registration_method: string;

    @ApiProperty()
    token: string;

    @ApiProperty()
    recovery_password_code: string;

    constructor(newUser: UserDto){
        this._id = newUser._id;
        this.email= newUser.email,
        this.password= newUser.password,
        this.system_status_id= newUser.system_status_id,
        this.confirmation_code= newUser.confirmation_code,
        this.confirmed_at= newUser.confirmed_at,
        this.accepted_conditions_at= newUser.accepted_conditions_at,
        this.created_at= newUser.created_at,
        this.updated_at= newUser.updated_at,
        this.registration_method= newUser.registration_method,
        this.token= newUser.token,
        this.recovery_password_code= newUser.recovery_password_code
    }
}

export class CreateUserDto {
    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto){

    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    updated_at: Date;

}
