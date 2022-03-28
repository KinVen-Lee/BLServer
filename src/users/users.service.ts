import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { makeHash, makeSalt } from '../utils/bcrypt'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { User } from './entities/user.entity'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { username, password, passwordRepeat } = createUserDto
    if (password !== passwordRepeat) {
      throw new BadRequestException('两次输入的密码不一致，请检查')
    }

    const hasUser = await this.findOneByUserName(username)
    if (hasUser) {
      throw new BadRequestException('该用户已存在')
    }

    const salt = await makeSalt()
    const hashPassword = await makeHash(password, salt)
    const createUser = await this.usersRepository.create({
      username,
      password: hashPassword
    })

    const saveUser = await this.usersRepository.save(createUser)
    return saveUser
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find()
  }

  async findOneByUserName(username: string): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { username } })
    return user
  }

  async findOne(id: string): Promise<User> {
    const user = await this.usersRepository.findOne(id)
    if (!user) {
      throw new NotFoundException('找不到该用户')
    }
    return user
  }

  async update(id: string, updateUserDto: Partial<UpdateUserDto>) {
    const user = await this.usersRepository.findOne(id)
    if (!user) {
      throw new NotFoundException('找不到该用户')
    }

    const updateUser = await this.usersRepository.save(Object.assign(user, updateUserDto))
    return updateUser
  }

  async remove(id: string): Promise<User> {
    let user = await this.findOne(id)
    if (!user) {
      throw new NotFoundException('该用户不存在')
    }
    user = Object.assign(user, { isDeleted: true })
    const deleteUser = await this.usersRepository.save(user)
    return deleteUser
  }
}
