import { ValidationException } from '@nx-cms/common/exceptions';
import { validateSync } from 'class-validator';

/*
 *   @description: Helper function to validate models. If any properties are provided in the object that are not annotated it throws too.
 *   @property: obj - the instance of a model
 *   @property: detail - custom message to display when there is an error
 *   @throws: ValidationException
 */
export const validateModel = (obj: object, detail?: string): void => {
  const validationErrors = validateSync(obj, { forbidNonWhitelisted: true });
  if (validationErrors.length) {
    throw ValidationException.fromValidationErrors(
      validationErrors,
      detail || `Invalid ${obj?.constructor?.name || typeof obj} invariant`
    );
  }
};
