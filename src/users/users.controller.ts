import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiCreatedResponse({
    type: User,
    description: "New user created successfully",
  })
  @ApiBadRequestResponse({ description: "Invalid/Missing Fields"})
  @Post()
  create(@Body() createUserDto: CreateUserDto): User {
    return this.usersService.create(createUserDto);
  }

  @ApiOkResponse({
    type: User,
    isArray: true,
    description: "Get all available users"
  })
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @ApiOkResponse({type: User, description: 'Get user by Id'})
  @ApiNotFoundResponse({description: 'User not found'})
  @Get(':id')
  findOne(@Param('id') id: number) {
    console.log('-->', typeof id)
    const user = this.usersService.findOne(+id);
    if(!user){
      throw new NotFoundException();
    }
    return user;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
