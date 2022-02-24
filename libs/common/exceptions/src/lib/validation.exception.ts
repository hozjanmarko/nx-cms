import { BadRequestException, HttpStatus } from '@nestjs/common';
import { ValidationError } from 'class-validator';

export class ValidationException extends BadRequestException {
  public fieldErrors: FieldErrors;

  constructor(fieldErrors: FieldErrors = {}, detail?: string) {
    super({
      detail,
      httpStatus: HttpStatus.BAD_REQUEST,
      title: 'Validation exception',
      message: `${ValidationException._makeMessageFromFieldErrors(
        fieldErrors
      )}`,
      code: 'validation-exception',
    });
    this.fieldErrors = fieldErrors;
  }

  public static _makeMessageFromFieldErrors(fieldError: FieldErrors): string {
    return Object.entries(fieldError)
      .reduce((m: string[], [k, v]) => {
        m.push(`'${k}' ${v.message}`);
        return m;
      }, [] as string[])
      .join(', ');
  }

  public static fromFieldErrors(
    fieldError: FieldErrors,
    detail?: string
  ): ValidationException {
    return new ValidationException(fieldError, detail);
  }

  public static fromValidationErrors(
    validationErrors: ValidationError | ValidationError[],
    detail: string
  ): ValidationException {
    return new ValidationException(
      flatten(
        Array.isArray(validationErrors) ? validationErrors : [validationErrors]
      ),
      detail
    );
  }
}

export interface FieldError {
  id?: string;
  message: string;
  constraints?: { [key: string]: string };
}

export interface FieldErrors {
  [key: string]: FieldError;
}

export function flatten(
  validationErrors: ValidationError[],
  prefix = ''
): FieldErrors {
  let fieldErrors: FieldErrors = {};
  for (const { property, children, constraints, value } of validationErrors) {
    // use slug instead of index number
    // slug should be unique in all lists
    const name =
      property && property.match(/^[0-9]+$/) && typeof value.slug === 'string'
        ? value.slug
        : property;
    if (constraints) {
      fieldErrors[`${prefix}${name}`] = {
        constraints,
        message: Object.values(constraints).join(', '),
      };
    }
    if (children) {
      fieldErrors = {
        ...fieldErrors,
        ...flatten(children, `${prefix}${name}.`),
      };
    }
  }
  return fieldErrors;
}
