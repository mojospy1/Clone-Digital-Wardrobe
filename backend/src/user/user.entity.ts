import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Clothing } from '../clothing/clothing.entity';
import { Outfit } from '../outfit/outfit.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn({ name: 'user_id' })
  user_id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 255 })
  email: string;

  @Column({ length: 255 })
  password: string;

  @OneToMany(() => Clothing, (clothing) => clothing.user)
  clothing: Clothing[];

  @OneToMany(() => Outfit, (outfit) => outfit.user)
  outfits: Outfit[];
}
