import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Clothing } from '../clothing/clothing.entity';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn({ name: 'category_id' })
  category_id: number;

  @Column({ length: 100 })
  name: string;

  @OneToMany(() => Clothing, (clothing) => clothing.category)
  clothing: Clothing[];
}
