import { createSelector } from 'reselect';

import { MOST_POPULAR, MOST_POPULAR_BY_CATEGORY, VIDEO_CATEGORIES } from '../actions/video';
import { SUCCESS } from '../actions';
import { WATCH_DETAILS, VIDEO_DETAILS } from '../actions/watch';
import { VIDEO_LIST_RESPONSE, SEARCH_LIST_RESPONSE } from '../api/youtube-response-types';

const initialState = {
  byId: {},
  mostPopular: {},
  categories: {},
};

export default function videos(state = initialState, action) {
  switch (action.type) {
    case MOST_POPULAR[SUCCESS]:
      return reduceFetchMostPopularVideos(action.response, state);
    case VIDEO_CATEGORIES[SUCCESS]:
      return reduceFetchVideoCategories(action.response, state);
    case MOST_POPULAR_BY_CATEGORY[SUCCESS]:
      return reduceFetchMostPopularVideosByCategory(action.response, action.categories, state);
    case WATCH_DETAILS[SUCCESS]:
      return reduceWatchDetails(action.response, state);
    case VIDEO_DETAILS[SUCCESS]:
      return reduceVideoDetails(action.response, state);
    default:
      return state;
  }
}

function reduceVideoDetails(responses, prevState) {
  const videoResponses = responses.filter(response => response.result.kind === VIDEO_LIST_RESPONSE);
  const parsedVideos = videoResponses.reduce((videoMap, response) => {
    // we're explicitly asking for a video with a particular id
    // so the response set must either contain 0 items (if a video with the id does not exist)
    // or at most one item (i.e. the channel we've been asking for)
    const video = response.result.items ? response.result.items[0] : null;
    if (!video) {
      return videoMap;
    }
    videoMap[video.id] = video;
    return videoMap;
  }, {});

  return {
    ...prevState,
    byId: { ...prevState.byId, ...parsedVideos },
  };
}

function reduceRelatedVideosRequest(responses) {
  const relatedVideosResponse = responses.find(r => r.result.kind === SEARCH_LIST_RESPONSE);
  const { pageInfo, items, nextPageToken } = relatedVideosResponse.result;
  const relatedVideoIds = items.map(video => video.id);

  return {
    totalResults: pageInfo.totalResults,
    nextPageToken,
    items: relatedVideoIds
  };
}

export const getVideoById = (state, videoId) => {
  return state.videos.byId[videoId];
};

function reduceWatchDetails(responses, prevState) {
  const videoDetailResponse = responses.find(r => r.result.kind === VIDEO_LIST_RESPONSE);
  
  const video = videoDetailResponse.result.items[0];
  const relatedEntry = reduceRelatedVideosRequest(responses);

  return {
    ...prevState,
    byId: {
      ...prevState.byId,
      [video.id]: video
    },
    related: {
      ...prevState.related,
      [video.id]: relatedEntry
    }
  };
}

function reduceFetchMostPopularVideosByCategory(responses, categories, prevState) {
  let videoMap = {};
  let byCategoryMap = {};

  responses.forEach((response, index) => {
    // Error
    if (response.status === 400) return;

    const categoryId = categories[index];
    const { byId, byCategory } = groupVideosByIdAndCategory(response.result);
    videoMap = { ...videoMap, ...byId };
    byCategoryMap[categoryId] = byCategory;
  });

  // compute new state
  return {
    ...prevState,
    byId: { ...prevState.byId, ...videoMap },
    byCategory: { ...prevState.byCategory, ...byCategoryMap },
  };
}

function groupVideosByIdAndCategory(response) {
  const videos = response.items;
  const byId = {};
  const byCategory = {
    totalResults: response.pageInfo.totalResults,
    nextPageToken: response.nextPageToken,
    items: [],
  };

  videos.forEach((video) => {
    byId[video.id] = video;

    const items = byCategory.items;
    if (items && items) {
      items.push(video.id);
    } else {
      byCategory.items = [video.id];
    }
  });

  return { byId, byCategory };
}

function reduceFetchVideoCategories(response, prevState) {
  const categoryMapping = response.items.reduce((accumulator, category) => {
    accumulator[category.id] = category.snippet.title;
    return accumulator;
  }, {});

  return {
    ...prevState,
    categories: categoryMapping,
  };
}

const getVideoCategories = (state) => state.videos.categories;
export const getVideoCategoryIds = createSelector(
  getVideoCategories,
  (categories) => {
    return Object.keys(categories || {});
  }
);

function reduceFetchMostPopularVideos(response, prevState) {
  const videoMap = response.items.reduce((accumulator, video) => {
    accumulator[video.id] = video;
    return accumulator;
  }, {});

  let items = Object.keys(videoMap);
  if (response.hasOwnProperty('prevPageToken') && prevState.mostPopular) {
    items = [...prevState.mostPopular.items, ...items];
  }

  const mostPopular = {
    totalResults: response.pageInfo.totalResults,
    nextPageToken: response.nextPageToken,
    items,
  };

  return {
    ...prevState,
    mostPopular,
    byId: { ...prevState.byId, ...videoMap },
  };
}

const getMostPopular = (state) => state.videos.mostPopular;
export const getMostPopularVideos = createSelector(
  (state) => state.videos.byId,
  getMostPopular,
  (videosById, mostPopular) => {
    if (!mostPopular || !mostPopular.items) {
      return [];
    }

    return mostPopular.items.map(videoId => videosById[videoId]);
  }
);

export const getVideosByCategory = createSelector(
  state => state.videos.byCategory,
  state => state.videos.byId,
  getVideoCategories,
  (videosByCategory, videosById, categories) => {
    return Object.keys(videosByCategory || {}).reduce((accumulator, categoryId) => {
      const videoIds = videosByCategory[categoryId].items;
      const categoryTitle = categories[categoryId];
      accumulator[categoryTitle] = videoIds.map(videoId => videosById[videoId]);
      return accumulator;
    }, {});
  }
);

export const videoCategoriesLoaded = createSelector(
  getVideoCategories,
  (categories) => {
    return Object.keys(categories || {}).length !==0;
  }
);

const getByCategory = (state) => state.videos.byCategory;
export const videosByCategoryLoaded = createSelector(
  getByCategory,
  (videosByCategory) => {
    return Object.keys(videosByCategory || {}).length;
  }
);