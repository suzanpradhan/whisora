import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entity/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}
    
    public checkStatus(): string {
        return "User service is working";
    }

    async createUser(createUserDto: CreateUserDto): Promise<User> {

        const existingUser = await this.userRepository.findOne({ where: { email: createUserDto.email } });
        
        if (existingUser) {
            throw new Error('User with this email already exists');
        }

        // create a new user instance and save it to the database
        const user = this.userRepository.create(createUserDto);
        return await this.userRepository.save(user);
    }

}