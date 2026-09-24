import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OutfitItem } from '../outfit-item/outfit-item.entity';
import { User } from '../user/user.entity';

@Entity('outfits')
export class Outfit {
  @PrimaryGeneratedColumn({ name: 'outfit_id' })
  outfit_id: number;

  @Column({ name: 'user_id' })
  user_id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string | null;

  @ManyToOne(() => User, (user) => user.outfits)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => OutfitItem, (outfitItem) => outfitItem.outfit)
  outfit_items: OutfitItem[];
}
