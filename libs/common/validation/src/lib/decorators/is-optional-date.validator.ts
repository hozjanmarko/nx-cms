import { IsDate, IsOptional } from 'class-validator';

export function IsOptionalDate(each = false): PropertyDecorator {
  return function (target: any, propertyKey: string | symbol): void {
    IsOptional({ each })(target, propertyKey);
    IsDate({ each })(target, propertyKey);
  };
}
