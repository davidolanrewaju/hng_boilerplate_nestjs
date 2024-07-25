import { AbstractBaseEntity } from '../../../entities/base.entity';
import { User } from '../../user/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Product extends AbstractBaseEntity {
  @ApiProperty()
  @Column({ type: 'text' })
  product_name: string;

  @ApiProperty()
  @Column('text')
  description: string;

  @ApiProperty()
  @Column('int')
  quantity: number;

  @ApiProperty()
  @Column('int')
  price: number;

  @ManyToOne(() => User, user => user.products)
  user: User;
}