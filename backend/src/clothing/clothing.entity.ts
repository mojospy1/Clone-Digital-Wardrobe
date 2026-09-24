import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from '../category/category.entity';
import { OutfitItem } from '../outfit-item/outfit-item.entity';
import { User } from '../user/user.entity';

@Entity('clothing')
export class Clothing {
  @PrimaryGeneratedColumn({ name: 'clothing_id' })
  clothing_id: number;

  @Column({ name: 'user_id' })
  user_id: number;

  @Column({ name: 'category_id' })
  category_id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 50, nullable: true })
  color: string | null;

  @Column({ length: 20, nullable: true })
  size: string | null;

  @Column({ length: 500, nullable: true })
  image_url: string | null;

  @ManyToOne(() => User, (user) => user.clothing)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Category, (category) => category.clothing)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @OneToMany(() => OutfitItem, (outfitItem) => outfitItem.clothing)
  outfit_items: OutfitItem[];
}
