import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './modules/quiz/quiz.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './config/typeorm.config';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }),
    DatabaseModule,
    QuizModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
