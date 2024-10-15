import { Injectable } from '@nestjs/common';
import { UsersService } from '../models/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) {}

    // async validateUser(email: string, pass: string): Promise<any> {
    //   // const user = await this.usersService.findOne({"email":email});
    //   // console.log(await bcrypt.hash(pass, 10));
    //   // if (user && bcrypt.compare(user.password, await bcrypt.hash(pass, 10))) {
    //   //   const { password, ...result } = user;
    //   //   return result;
    //   // }
    //   // return null;
    // }

    async validateUser(email: string, pass: string): Promise<any> {
      const user = await this.usersService.findOne({ email });
      
      if (user && await bcrypt.compare(pass, user.password)) {
        const { password, ...result } = user;
        return result;
      }
      
      return null;
    }

    async login(user: any) {
      // console.log(user.user);
      const payload = { 
          user : {
              id: user.user.id, 
              email: user.user.email, 
              name: user.user.name, 
              created_at: user.user.created_at, 
              updated_at: user.user.updated_at 
          }
      };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }

    async register(data) {
      console.log(data.password)
      data.password = await bcrypt.hash(data.password, 10)
      let response = await this.usersService.create(data);
      if (response) {
          const { password, ...result } = response;
          return result;
      }
    }

    decodeToken(token) : any {
      return this.jwtService.decode(token)
    }
}
