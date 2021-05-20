import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { UserDto, CreateUserDto, UpdateUserDto, User } from '../../models/user';
import { UserService } from '../../services';

@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    @ApiResponse({
        status: 200,
        description: 'Get all users.',
        type: [UserDto],
    })
    async getAll(): Promise<User[]> {
        return this.userService.getAll();
    }

    @Get(':id')
    @ApiResponse({
        status: 200,
        description: 'Get user by id.',
        type: UserDto,
    })
    get(@Param('id') id: string): Promise<User> {
        return this.userService.get(id);
    }

    @Post()
    @ApiResponse({
        status: 200,
        description: 'The user has been successfully created.',
        type: UserDto
    })
    async create(@Body() userDto: CreateUserDto): Promise<User> {
        return this.userService.create(userDto);
    }

    @Put(':id')
    @ApiResponse({
        status: 200,
        description: 'The user has been successfully updated.',
        type: UserDto
    })
    async update(@Param('id') id: string, @Body() userDto: UpdateUserDto): Promise<User> {
        return this.userService.update(id, userDto)
    }

    @Delete(':id')
    @ApiResponse({
        status: 200,
        description: 'The user has been successfully deleted.',
        type: UserDto
    })
    async delete(@Param('id') id: string): Promise<User> {
        return this.userService.delete(id)
    }
}
