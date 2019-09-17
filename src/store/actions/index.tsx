export const REQUEST = 'REQUEST'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'

export function createRequestTypes(base: any) {
  if (!base) {
    throw new Error('cannot create request type with base = \'\' or base = null');
  }

  return [REQUEST, SUCCESS, FAILURE].reduce((acc: any, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
}

export function createAction(type: any, payload = {}) {
  return { 
    type,
    ...payload,
  };
}
