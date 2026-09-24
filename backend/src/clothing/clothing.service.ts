import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clothing } from './clothing.entity';

@Injectable()
export class ClothingService {
  constructor(
    @InjectRepository(Clothing)
    private readonly clothingRepository: Repository<Clothing>,
  ) {}

  create(clothingData: Partial<Clothing>): Promise<Clothing> {
    const clothing = this.clothingRepository.create(clothingData);
    return this.clothingRepository.save(clothing);
  }

  findAll(): Promise<Clothing[]> {
    return this.clothingRepository.find({ relations: ['user', 'category'] });
  }

  async findOne(clothing_id: number): Promise<Clothing> {
    const clothing = await this.clothingRepository.findOne({
      where: { clothing_id },
      relations: ['user', 'category'],
    });
    if (!clothing) {
      throw new NotFoundException(`Clothing ${clothing_id} not found`);
    }
    return clothing;
  }

  async update(
    clothing_id: number,
    clothingData: Partial<Clothing>,
  ): Promise<Clothing> {
    await this.findOne(clothing_id);
    await this.clothingRepository.update(clothing_id, clothingData);
    return this.findOne(clothing_id);
  }

  async remove(clothing_id: number): Promise<void> {
    const clothing = await this.findOne(clothing_id);
    await this.clothingRepository.remove(clothing);
  }
}
