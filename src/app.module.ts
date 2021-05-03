import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';

//code 1st approrach

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile:true
    }),
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
