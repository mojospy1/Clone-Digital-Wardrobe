import { Module } from '@nestjs/common';
import { ClothingController } from './clothing.controller';
import { ClothingService } from './clothing.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clothing } from './clothing.entity';

@Module({
  controllers: [ClothingController],
  providers: [ClothingService],
  imports: [TypeOrmModule.forFeature([Clothing])],
})
export class ClothingModule {}
