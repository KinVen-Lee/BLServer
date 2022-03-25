import { ApiProperty } from '@nestjs/swagger'
import { CreateUserVO } from '../vo/create-user.vo'

export class CreateUserResponse {
  @ApiProperty({ description: '状态码', example: 200 })
  code: number

  @ApiProperty({ description: '数据', type: () => CreateUserVO, example: CreateUserVO })
  data: CreateUserVO

  @ApiProperty({ description: '请求结果信息', example: '请求成功' })
  message: string
}
