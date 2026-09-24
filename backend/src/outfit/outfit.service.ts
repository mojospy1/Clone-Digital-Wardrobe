import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Outfit } from './outfit.entity';

@Injectable()
export class OutfitService {
  constructor(
    @InjectRepository(Outfit)
    private readonly outfitRepository: Repository<Outfit>,
  ) {}

  create(outfitData: Partial<Outfit>): Promise<Outfit> {
    const outfit = this.outfitRepository.create(outfitData);
    return this.outfitRepository.save(outfit);
  }

  findAll(): Promise<Outfit[]> {
    return this.outfitRepository.find({ relations: ['user', 'outfit_items'] });
  }

  async findOne(outfit_id: number): Promise<Outfit> {
    const outfit = await this.outfitRepository.findOne({
      where: { outfit_id },
      relations: ['user', 'outfit_items'],
    });
    if (!outfit) {
      throw new NotFoundException(`Outfit ${outfit_id} not found`);
    }
    return outfit;
  }

  async update(outfit_id: number, outfitData: Partial<Outfit>): Promise<Outfit> {
    await this.findOne(outfit_id);
    await this.outfitRepository.update(outfit_id, outfitData);
    return this.findOne(outfit_id);
  }

  async remove(outfit_id: number): Promise<void> {
    const outfit = await this.findOne(outfit_id);
    await this.outfitRepository.remove(outfit);
  }
}
