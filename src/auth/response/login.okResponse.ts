import { ApiProperty } from '@nestjs/swagger'
import { LoginVO } from '../vo/login.vo'

export class LoginOkResponse {
  @ApiProperty({
    description: '状态码'
  })
  code: number

  @ApiProperty({
    description: '数据',
    type: () => LoginVO,
    example: LoginVO
  })
  data: LoginVO

  @ApiProperty({
    description: '请求结果消息',
    example: 'success'
  })
  message: string
}
