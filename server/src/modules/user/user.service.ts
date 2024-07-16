import { Injectable } from "@nestjs/common";
import { UserRegisterDto } from "./user/user-register.dto";
import { User } from "./user.entity";

@Injectable()
export class UserService {
    async doUserRegistration(userRegister: UserRegisterDto): Promise<User> {
        const user = new User()
        user.name = userRegister.name;
        user.email = userRegister.email;
        user.password = userRegister.password;

        return await user.save()
    }
}
