import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('user')
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
  @Column({ name: 'is_delete', default: false })
  isDelete: boolean

  // 加密盐
  @Column()
  salt: string
}
