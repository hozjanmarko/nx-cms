import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export function IsID(optional = false, each = false): PropertyDecorator {
  return function (target: any, propertyKey: string | symbol): void {
    if (optional) {
      IsOptional({ each })(target, propertyKey);
    }
    IsString({ each })(target, propertyKey);
    IsNotEmpty({ each })(target, propertyKey);
  };
}
