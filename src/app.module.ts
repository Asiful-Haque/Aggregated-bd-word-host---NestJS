import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
// import { meaningModule } from './meaning/meaning.module';
import { meaning2Module } from './meaning2/meaning2.module';
import { spellingModule } from './spelling/spelling.module';
import { Game1Module } from './game1/game1.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes configuration available globally
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    // meaningModule,
    meaning2Module,
    spellingModule,
    Game1Module,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
