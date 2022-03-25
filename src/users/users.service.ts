import { HttpException, Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { makeHash, makeSalt } from '../utils/bcrypt'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { User } from './entities/user.entity'

@Injectable()
export class UsersService {
  private readonly users

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {
    this.users = [
      {
        userId: 1,
        username: 'john',
        password: 'changeme'
      },
      {
        userId: 2,
        username: 'chris',
        password: 'secret'
      },
      {
        userId: 3,
        username: 'maria',
        password: 'guess'
      }
    ]
  }

  async create(createUserDto: CreateUserDto) {
    const { username, password, passwordRepeat } = createUserDto
    if (password !== passwordRepeat) {
      throw new NotFoundException('两次输入的密码不一致，请检查')
    }

    const hasUser = await this.findOneByUserName(username)

    if (hasUser) {
      throw new NotFoundException('该用户已存在')
    }

    const salt = await makeSalt()
    const hashPassword = await makeHash(password, salt)

    const user: User = new User()
    const newUser = await this.userRepository.save({
      ...user,
      username,
      salt,
      password: hashPassword
    })

    return newUser
  }

  async findOneByUserName(username: string) {
    const user = this.userRepository.findOne({ where: { username } })
    return user
  }

  findAll() {
    return `This action returns all users`
  }

  async findOne(username: string) {
    return this.users.find(user => user.username === username)
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
