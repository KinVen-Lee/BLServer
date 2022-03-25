import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class CreateUserDto {
  @ApiProperty({
    description: '用户账号',
    example: 'root'
  })
  @IsNotEmpty({
    message: '用户名不能为空'
  })
  readonly username: string

  @ApiProperty({
    description: '用户密码',
    example: '123456'
  })
  @IsNotEmpty({
    message: '密码不能为空'
  })
  readonly password: string

  @ApiProperty({
    description: '确认密码',
    example: '123456'
  })
  @IsNotEmpty({
    message: '请再次输入密码'
  })
  readonly passwordRepeat: string
}
