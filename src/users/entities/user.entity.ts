import {
  OneToMany,
  JoinColumn,
  OneToOne,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Profile } from '../../profiles/entities/profile.entity'
import { Article } from '../../articles/entities/article.entity'

@Entity('users')
export class User {
  // 用户ID
  @PrimaryGeneratedColumn('uuid')
  id: string

  // 账号
  @Column({ unique: true })
  username: string

  // 密码
  @Column()
  password: string

  // 创建时间
  @CreateDateColumn({ name: 'create_at' })
  createAt: Date

  // 更新时间
  @UpdateDateColumn({ name: 'update_at' })
  updatedAt: Date

  @Column({ name: 'is_active', default: true })
  isActive: boolean

  // 软删除
  @Column({ name: 'is_deleted', default: false })
  isDeleted: boolean

  @OneToOne(type => Profile, profile => profile.user)
  @JoinColumn()
  profile: Profile

  @OneToMany(type => Article, article => article.author)
  articles: Article[]
}
