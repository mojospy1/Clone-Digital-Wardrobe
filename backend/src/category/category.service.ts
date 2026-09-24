import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  create(categoryData: Partial<Category>): Promise<Category> {
    const category = this.categoryRepository.create(categoryData);
    return this.categoryRepository.save(category);
  }

  findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  async findOne(category_id: number): Promise<Category> {
    const category = await this.categoryRepository.findOneBy({ category_id });
    if (!category) {
      throw new NotFoundException(`Category ${category_id} not found`);
    }
    return category;
  }

  async update(
    category_id: number,
    categoryData: Partial<Category>,
  ): Promise<Category> {
    await this.findOne(category_id);
    await this.categoryRepository.update(category_id, categoryData);
    return this.findOne(category_id);
  }

  async remove(category_id: number): Promise<void> {
    const category = await this.findOne(category_id);
    await this.categoryRepository.remove(category);
  }
}
