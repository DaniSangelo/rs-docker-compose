import { Module } from '@nestjs/common';
import { HttpModule } from './infrastructure/http/http.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    HttpModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
