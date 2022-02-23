export interface CmsDataAccessModuleConnectionOptions {
  database: string;
  username: string;
  password: string;
  debug?: boolean;
  ssl?: boolean;
  runMigrations?: boolean;
  port?: number;
}
