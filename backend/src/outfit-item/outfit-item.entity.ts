import {
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';
import { Clothing } from '../clothing/clothing.entity';
import { Outfit } from '../outfit/outfit.entity';

@Entity('outfit_items')
export class OutfitItem {
  @PrimaryGeneratedColumn({ name: 'outfit_item_id' })
  outfit_item_id: number;

  @Column({ name: 'outfit_id' })
  outfit_id: number;

  @Column({ name: 'clothing_id' })
  clothing_id: number;

  @ManyToOne(() => Outfit)
  @JoinColumn({ name: 'outfit_id' })
  outfit: Outfit;

  @ManyToOne(() => Clothing)
  @JoinColumn({ name: 'clothing_id' })
  clothing: Clothing;
}
