import { Module } from '@nestjs/common';
import { OutfitItemController } from './outfit-item.controller';
import { OutfitItemService } from './outfit-item.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OutfitItem } from './outfit-item.entity';

@Module({
  controllers: [OutfitItemController],
  providers: [OutfitItemService],
  imports: [TypeOrmModule.forFeature([OutfitItem])],
})
export class OutfitItemModule {}
