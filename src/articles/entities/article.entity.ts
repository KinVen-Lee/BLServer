import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { User } from '../../users/entities/user.entity'
import { Comment } from '../../comments/entities/comment.entity'

@Entity({ name: 'articles' })
export class Article {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column({ type: 'text' })
  description: string

  @Column({ type: 'text' })
  content: string

  @CreateDateColumn({ name: 'create_at' })
  createAt: Date

  @UpdateDateColumn({ name: 'update_at' })
  updataAt: Date

  @ManyToOne(type => User, user => user.articles)
  author: User

  @OneToMany(type => Comment, comment => comment.article)
  comment: Comment[]
}
