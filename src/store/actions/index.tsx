export function createAction(type: any, payload = {}) {
  return {
    type,
    ...payload,
  };
}