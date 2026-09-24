import { Module } from '@nestjs/common';
import { OutfitController } from './outfit.controller';
import { OutfitService } from './outfit.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Outfit } from './outfit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Outfit])],
  controllers: [OutfitController],
  providers: [OutfitService],
})
export class OutfitModule {}
