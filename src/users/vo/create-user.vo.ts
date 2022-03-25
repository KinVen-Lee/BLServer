import { ApiProperty } from '@nestjs/swagger'

export class CreateUserVO {
  @ApiProperty({ description: '用户id', example: '12332' })
  id: string

  @ApiProperty({
    description: '账号',
    example: 'root'
  })
  username: string

  @ApiProperty({ description: '创建时间', example: '2021-07-21' })
  createAt: Date

  @ApiProperty({ description: '更新时间', example: '2021-07-21' })
  updateAt: Date
}
