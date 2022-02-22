import { IsNotEmpty, IsString } from 'class-validator';

export function IsRequiredString(each = false): PropertyDecorator {
  return function (target: any, propertyKey: string | symbol): void {
    IsString({ each })(target, propertyKey);
    IsNotEmpty({ each })(target, propertyKey);
  };
}
