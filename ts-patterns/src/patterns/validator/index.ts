import validator from 'validator';

export interface EmailValidator {
  isValid: (value: string) => boolean;
}

export class EmailValidatorAdapter implements EmailValidator {
  public isValid(value: string): boolean {
    return validator.isEmail(value);
  }
}

export interface Validation {
  validate: () => boolean;
}

export class EmailValidation implements Validation {
  constructor(private readonly email: string, private readonly emailValidator: EmailValidator) {}

  validate(): boolean {
    return this.emailValidator.isValid(this.email);
  }
}

const emailIsValid = new EmailValidation('denernun@gmail.com@', new EmailValidatorAdapter()).validate();
console.log(emailIsValid);
