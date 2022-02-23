import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('articles')
export class CmsArticleEntity {
  @PrimaryColumn({ type: 'uuid' })
  public id: string;
  @Column()
  public title: string;
  @Column()
  public slug: string;
  public content: string;
  @CreateDateColumn({ type: 'timestamptz' })
  public createdAt: Date;
  @UpdateDateColumn({ type: 'timestamptz', nullable: true })
  public updatedAt?: Date;
  @UpdateDateColumn({ type: 'timestamptz', nullable: true })
  public publishedAt?: Date;
  @Column({ type: 'boolean' })
  public published: boolean;

  @Column()
  public accountId: string;
}
