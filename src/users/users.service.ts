import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  
  private users: User[] = [
    {
      id: 1,
      name: 'Scott',
      email: 'scott@ab.com'
    },
    {
      id: 2,
      name: 'John',
      email: 'john@ab.com'
    }
  ];


  create(createUserDto: CreateUserDto): User {
    const id = Date.now();
    const newUser: User = {
      id: id,
      name:createUserDto.name,
      email: createUserDto.email
    };
    this.users.push(newUser);
    return newUser;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }

  update(id: number, updateUserDto: UpdateUserDto): User {
    const index = this.users.findIndex((user) => user.id === id);
    if(updateUserDto.name) this.users[index].name = updateUserDto.name;
    if(updateUserDto.email) this.users[index].email = updateUserDto.email;
    return  this.users[index];
  }

  remove(id: number) {
    return this.users.splice(this.users.findIndex((user) => user.id === id), 1);
  }
}
