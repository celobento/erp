import { Injectable, UnauthorizedException } from "@nestjs/common";
//import { InjectModel } from "@nestjs/mongoose";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from 'passport-jwt'
import { PrismaService } from "src/db/prisma.service";
//import { User } from "./schemas/use.schema";
//import { Model } from "mongoose";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly prisma: PrismaService
    ){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRET
        })
    }

    // bearer token
    async validate(payload) {
        const { id } = payload

        const user = await this.prisma.usuario.findUnique({
            where: {
              id: id,
            },
        })
        

        if(!user) {
            throw new UnauthorizedException('Login first to access this resource')
        }

        return user
    }
}