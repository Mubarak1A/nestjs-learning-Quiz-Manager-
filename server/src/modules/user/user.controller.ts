import { Body, Controller, HttpStatus, Post, ValidationPipe } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserRegisterDto } from "./user/user-register.dto";
import { SETTINGS } from "src/app.utils";
import { User } from "./user.entity";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('/register')
    async doUserRegistration(
        @Body(SETTINGS.VALIDATION_PIPE) 
        userRegister: UserRegisterDto
    ): Promise<User> {
        return await this.userService.doUserRegistration(userRegister)
    }
}