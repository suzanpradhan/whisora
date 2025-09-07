import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
    
    public checkStatus(): string {
        return "Auth service is working";
    }

}