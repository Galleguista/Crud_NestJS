/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [ProductsModule,
  MongooseModule.forRoot('mongodb+srv://ykys1xd:Conan3123@cluster0.gtlzrgp.mongodb.net/?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
