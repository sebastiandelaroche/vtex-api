import * as R from 'ramda';

export const getId = R.prop('id');

export const isIdDefine = R.compose(R.isNotEmptyOrNil, getId);
