import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto, AuthSignupDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async signup(dto: AuthSignupDto) {
    //create pw hash with argon2
    const hash = await argon.hash(dto.password);
    try {
      //save new user in db
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          hash,
          firstName: dto.firstName,
          lastName: dto.lastName,
        },
      });

      return this.signToken(user.id, user.email);
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken!');
        }
      }
    }
  }
  async signin(dto: AuthDto) {
    //find user by email
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    //throw exception if user doesn't exist
    if (!user) throw new ForbiddenException('Credential incorrect!');

    //validate pw
    const pwMatches = await argon.verify(user.hash, dto.password);

    //pw mismatch
    if (!pwMatches) throw new ForbiddenException('Credentials incorrect!');

    return this.signToken(user.id, user.email);
  }

  //generate token

  async signToken(
    userId: number,
    email: string,
  ): Promise<{ access_token: String }> {
    const payload = {
      sub: userId,
      email,
    };
    const secret = this.config.get('JWT_SECRET');

    const token = await this.jwt.signAsync(payload, {
      expiresIn: '24h',
      secret: secret,
    });
    return {
      access_token: token,
    };
  }
}
