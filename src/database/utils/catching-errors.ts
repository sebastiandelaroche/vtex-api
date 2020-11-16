import * as R from 'ramda';
import { DoesExistException, Exception, InvalidInputDataException } from '@core/exceptions';
import { Class } from '@core/utils';

export const transformError = (httpException: Class<Exception>) =>
  (error?: Error) => new httpException(error.message);

export const errorCodeEqualsTo = (code: string) =>
  R.compose(R.equals(code), R.prop('code'));

export const getSystemException = R.cond([
  [errorCodeEqualsTo('23505'), transformError(DoesExistException)],
  [errorCodeEqualsTo('22P02'), transformError(InvalidInputDataException)],
  [R.is(Exception), R.identity],
  [R.T, transformError(Exception)]
]);
