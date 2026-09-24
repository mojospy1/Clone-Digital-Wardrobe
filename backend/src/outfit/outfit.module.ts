import { Module } from '@nestjs/common';
import { OutfitController } from './outfit.controller';
import { OutfitService } from './outfit.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Outfit } from './outfit.entity';

@Module({
  controllers: [OutfitController],
  providers: [OutfitService],
  imports: [TypeOrmModule.forFeature([Outfit])],
})
export class OutfitModule {}
