export interface CmsDataAccessModuleConnectionOptions {
  database: string;
  username: string;
  password: string;
  ssl?: boolean;
  runMigrations?: boolean;
  port?: number;
}
