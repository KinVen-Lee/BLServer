import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { User } from '../../users/entities/user.entity'

@Entity({ name: 'profiles' })
export class Profile {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  nickname: string

  @Column()
  age: number

  @Column()
  phone: string

  @Column()
  email: string

  @Column()
  sex: string

  @Column()
  address: string

  @CreateDateColumn({ name: 'create_at' })
  createAt: Date

  @UpdateDateColumn({ name: 'update_at' })
  updataAt: Date

  @OneToOne(type => User, user => user.profile)
  @JoinColumn()
  user: User
}
