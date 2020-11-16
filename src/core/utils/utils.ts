import * as R from 'ramda';
import { Exception } from '@core/exceptions';
import { Class } from './types';


export const isEmptyOrNil = R.either(R.isNil, R.isEmpty);

export const isNotEmptyOrNil: (value: any) => boolean = R.compose(R.not, isEmptyOrNil);

export const removeUndefined = R.filter(isNotEmptyOrNil) as any;

export const throwErrorWithMessage = R.curry((exception: Class<Exception>, message: string) => {
  throw new exception(message);
});

export const throwError = (exception: Exception) => () => {
  throw exception;
};

export const throwErrorIfEmptyOrNil = (exception: Exception) =>
  R.ifElse(R.isEmptyOrNil, throwError(exception), R.identity);

export const throwErrorIfNotEmptyOrNil = (exception: Exception) =>
  R.ifElse(R.isNotEmptyOrNil, throwError(exception), R.identity);

export const wrapInArray = <T>(data: T): T[] => [data];
