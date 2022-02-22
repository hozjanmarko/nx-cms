import { BadRequestException } from '@nestjs/common';

export class ValidationException extends BadRequestException {
  /**
   * TODO propper implement or import from template library
   */
  constructor(_message: string, _errorCode?: string) {
    super();
  }
}
