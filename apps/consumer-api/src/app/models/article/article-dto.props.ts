export interface ArticleDtoProps {
  id: string;
  title: string;
  slug: string;
  content?: string;
  createdAt: Date;
  updatedAt?: Date;
  publishedAt?: Date;
  published: boolean;
}
