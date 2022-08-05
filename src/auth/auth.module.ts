import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtStratergy } from './jwt.stratergy';

@Module({
  imports: [
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.register({
      secret: 'topSecreat51',
      signOptions:{
        expiresIn:3600,
      }
    }),
    TypeOrmModule.forFeature([User])],
  providers: [AuthService, jwtStratergy],
  controllers: [AuthController],
  exports: [jwtStratergy, PassportModule]
})
export class AuthModule {}
