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
import { Outfit } from './outfit.entity';
import { OutfitService } from './outfit.service';

@Controller('outfits')
export class OutfitController {
  constructor(private readonly outfitService: OutfitService) {}

  @Post()
  create(@Body() outfitData: Partial<Outfit>): Promise<Outfit> {
    return this.outfitService.create(outfitData);
  }

  @Get()
  findAll(): Promise<Outfit[]> {
    return this.outfitService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Outfit> {
    return this.outfitService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() outfitData: Partial<Outfit>,
  ): Promise<Outfit> {
    return this.outfitService.update(id, outfitData);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.outfitService.remove(id);
  }
}
