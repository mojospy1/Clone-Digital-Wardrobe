import { Module } from '@nestjs/common';
import { OutfitItemController } from './outfit-item.controller';
import { OutfitItemService } from './outfit-item.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OutfitItem } from './outfit-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OutfitItem])],
  controllers: [OutfitItemController],
  providers: [OutfitItemService],
})
export class OutfitItemModule {}
