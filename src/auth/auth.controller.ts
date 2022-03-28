import { Controller, Post, UseGuards, Request, Body } from '@nestjs/common'
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { AuthService } from './auth.service'
import { LoginDTO } from './dto/login.dto'
import { LocalAuthGuard } from './guards/local-auth.guard'
import { LoginOkResponse } from './response/login.okResponse'

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiBody({ type: LoginDTO })
  @ApiOkResponse({ description: '登录', type: LoginOkResponse })
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user)
  }
}
