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
import { Clothing } from './clothing.entity';
import { ClothingService } from './clothing.service';

@Controller('clothing')
export class ClothingController {
  constructor(private readonly clothingService: ClothingService) {}

  @Post()
  create(@Body() clothingData: Partial<Clothing>): Promise<Clothing> {
    return this.clothingService.create(clothingData);
  }

  @Get()
  findAll(): Promise<Clothing[]> {
    return this.clothingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Clothing> {
    return this.clothingService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() clothingData: Partial<Clothing>,
  ): Promise<Clothing> {
    return this.clothingService.update(id, clothingData);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.clothingService.remove(id);
  }
}
