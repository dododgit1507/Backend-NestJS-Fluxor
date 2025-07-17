import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { UserTokensModule } from './user_tokens/user_tokens.module';
import { TokensLimitModule } from './tokens_limit/tokens_limit.module';
import { TokensUseHistoryModule } from './tokens_use_history/tokens_use_history.module';
import { WorkflowModule } from './workflow/workflow.module';
import { WorkflowAssignmentModule } from './workflow-assignment/workflow-assignment.module';
import { TokenManagerModule } from './token-manager/token-manager.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      schema: process.env.DB_SCHEMA,
      synchronize: true, // only for development
    }),
    UsersModule,
    AuthModule,
    UserTokensModule,
    TokensLimitModule,
    TokensUseHistoryModule,
    WorkflowModule,
    WorkflowAssignmentModule,
    TokenManagerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
