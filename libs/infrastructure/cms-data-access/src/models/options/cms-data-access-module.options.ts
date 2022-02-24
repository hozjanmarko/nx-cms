import { ModuleMetadata } from '@nestjs/common';
import { CmsDataAccessModuleConnectionOptions } from './cms-data-acces-module-connection.options';
export interface CmsDataAccessModuleOptions
  extends Pick<ModuleMetadata, 'imports'> {
  inject?: unknown[];
  useFactory?: (
    ...args: unknown[]
  ) =>
    | Promise<CmsDataAccessModuleConnectionOptions>
    | CmsDataAccessModuleConnectionOptions;
}

export const CmsDataAccessModuleOptions = Symbol('CmsDataAccessModuleOptions');
