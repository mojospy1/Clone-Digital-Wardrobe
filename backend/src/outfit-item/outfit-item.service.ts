import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OutfitItem } from './outfit-item.entity';

@Injectable()
export class OutfitItemService {
  constructor(
    @InjectRepository(OutfitItem)
    private readonly outfitItemRepository: Repository<OutfitItem>,
  ) {}

  create(itemData: Partial<OutfitItem>): Promise<OutfitItem> {
    const item = this.outfitItemRepository.create(itemData);
    return this.outfitItemRepository.save(item);
  }

  findAll(): Promise<OutfitItem[]> {
    return this.outfitItemRepository.find({
      relations: ['outfit', 'clothing'],
    });
  }

  async findOne(outfit_item_id: number): Promise<OutfitItem> {
    const item = await this.outfitItemRepository.findOne({
      where: { outfit_item_id },
      relations: ['outfit', 'clothing'],
    });
    if (!item) {
      throw new NotFoundException(`Outfit item ${outfit_item_id} not found`);
    }
    return item;
  }

  async update(
    outfit_item_id: number,
    itemData: Partial<OutfitItem>,
  ): Promise<OutfitItem> {
    await this.findOne(outfit_item_id);
    await this.outfitItemRepository.update(outfit_item_id, itemData);
    return this.findOne(outfit_item_id);
  }

  async remove(outfit_item_id: number): Promise<void> {
    const item = await this.findOne(outfit_item_id);
    await this.outfitItemRepository.remove(item);
  }
}
