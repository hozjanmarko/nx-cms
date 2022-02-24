import { IsString, IsOptional } from 'class-validator';

export function IsOptionalString(each = false): PropertyDecorator {
  return function (target: any, propertyKey: string | symbol): void {
    IsOptional({ each })(target, propertyKey);
    IsString({ each })(target, propertyKey);
  };
}
