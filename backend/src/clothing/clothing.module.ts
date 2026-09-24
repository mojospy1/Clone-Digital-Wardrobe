import { Module } from '@nestjs/common';
import { ClothingController } from './clothing.controller';
import { ClothingService } from './clothing.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clothing } from './clothing.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Clothing])],
  controllers: [ClothingController],
  providers: [ClothingService],
})
export class ClothingModule {}
