import { ApiProperty } from '@nestjs/swagger'

export class LoginVO {
  @ApiProperty({ description: 'token', example: 'sdfghjkldasascvbnm' })
  token: string
}
