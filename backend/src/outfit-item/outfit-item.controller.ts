import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { OutfitItem } from './outfit-item.entity';
import { OutfitItemService } from './outfit-item.service';

@Controller('outfit-items')
export class OutfitItemController {
  constructor(private readonly outfitItemService: OutfitItemService) {}

  @Post()
  create(@Body() itemData: Partial<OutfitItem>): Promise<OutfitItem> {
    return this.outfitItemService.create(itemData);
  }

  @Get()
  findAll(): Promise<OutfitItem[]> {
    return this.outfitItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<OutfitItem> {
    return this.outfitItemService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() itemData: Partial<OutfitItem>,
  ): Promise<OutfitItem> {
    return this.outfitItemService.update(id, itemData);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.outfitItemService.remove(id);
  }
}
