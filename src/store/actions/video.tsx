import { createAction, createRequestTypes, REQUEST, SUCCESS, FAILURE } from './index';

export const MOST_POPULAR = createRequestTypes('MOST_POPULAR');
export const mostPopular = {
  request: (amount, loadDescription, nextPageToken) => createAction(MOST_POPULAR[REQUEST], { amount, loadDescription, nextPageToken }),
  success: (response) => createAction(MOST_POPULAR[SUCCESS], { response }),
  failure: (response) => createAction(MOST_POPULAR[FAILURE], { response }),
};

export const VIDEO_CATEGORIES = createRequestTypes('VIDEO_CATEGORIES');
export const categories = {
  request: () => createAction(VIDEO_CATEGORIES[REQUEST]),
  success: (response) => createAction(VIDEO_CATEGORIES[SUCCESS], { response }),
  failure: (response) => createAction(VIDEO_CATEGORIES[FAILURE], { response }),
};