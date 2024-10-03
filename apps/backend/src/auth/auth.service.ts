import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
//import { User } from './schemas/use.schema';
//import { InjectModel } from '@nestjs/mongoose';
//import { Model } from 'mongoose';
import { SignUpDto } from './dto/signup.dto';

//import * as bcrypt from 'bcryptjs'
import { LoginDto } from './dto/login.dto';
//import APIFeatures from '../../src/utils/apiFeatures.util';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/db/prisma.service';
import APIFeatures from 'src/utils/apiFeatures.util';

@Injectable()
export class AuthService {
    constructor(
        //@InjectModel(User.name)
        //private userModel: Model<User>,
        private readonly prisma: PrismaService,
        private jwtService: JwtService
    ){}

    // register user
    //async signUp(signUpDto: SignUpDto): Promise<{token: string}> {
    //    const { name, email, password } = signUpDto

//        const hashedPassword = await bcrypt.hash(password, 10)

  //      try {
    //        const user = await this.userModel.create({
      //          name, email, password: hashedPassword
        //    })

          //  const token = await APIFeatures.assignJwtToken(user._id, this.jwtService)
            // as this is not a object, than cant be like that " return  token "
       //     return { token } 
       // } catch (error) {
       //     console.log(error)   
            // handle duplicate email
       //     throw new ConflictException('failure on create user. Detail: ' + error.errmsg)
       // }
    //}

    // login user
    async login(loginDto: LoginDto): Promise<{token: string}> {
        const { email, password } = loginDto
        console.log(email)
        const user = await this.prisma.usuario.findUnique({
            where: {
              login: email,
            },
          })
          console.log(user)
        if (!user) {
            throw new UnauthorizedException('Invalid email address or password')
        }

        // check password
        //const isPasswordMatched = await bcrypt.compare(password, user.password)

        //if (!isPasswordMatched) {
        //    throw new UnauthorizedException('Invalid email address or password')
        //}

        const token = await APIFeatures.assignJwtToken(user.id.toString(), this.jwtService)
        // as this is not a object, than cant be like that " return  token "
        return { token } 
    }
}
