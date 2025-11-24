import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    
    constructor(private readonly userService:UsersService){}

    @Get()  //get all the user or get users?role=value
    findAll(@Query('role') role?: 'admin' | 'student') {
        return this.userService.findAll()
    }

    @Get('/mofos') // get users/mofos , 
    findMofos() {
        return 'all mofos'
    }

    @Get(':id') // get params from get request
    findOne(@Param('id') id: string) {
        return this.userService.findOne(+id)
    }
 
    @Post()  // post request get body of it and create
    createUser(@Body() user: {}) {
        return user
    }

    @Patch(':id') //patch to get id and body to update some information
    updateUser(@Param('id') id: string, @Body() userUpdateInfo: {}) {
        return { id, ...userUpdateInfo }
    }

    @Delete(':id')  // get id as params and delete one 
    deleteOne(@Param('id') id: string) {
        return { name: 'deleted', userId: id }
    }

}
