import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
    
    public checkStatus(): string {
        return "User service is working";
    }

}