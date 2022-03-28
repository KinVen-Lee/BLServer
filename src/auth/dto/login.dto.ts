import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class LoginDTO {
  @ApiProperty({
    description: '用户名',
    example: 'root'
  })
  @IsNotEmpty({ message: '用户名不能为空' })
  readonly username: string

  @ApiProperty({
    description: '密码',
    example: '123456'
  })
  @IsNotEmpty({ message: '密码不能为空' })
  readonly password: string
}
