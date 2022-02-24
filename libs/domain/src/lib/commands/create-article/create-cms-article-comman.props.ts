export interface CreateCmsArticleCommandProps {
  title: string;
  content?: string;
  published?: boolean;
  accountId: string;
}
