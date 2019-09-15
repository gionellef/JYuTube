import { YOUTUBE_LIBRARY_LOADED } from '../actions/api';

const initialState = {
  libraryLoaded: false,
};
export default function (state = initialState, action: { type: any; }) {
  switch (action.type) {
    case YOUTUBE_LIBRARY_LOADED:
      return {
        libraryLoaded: true,
      };
    default:
      return state;
  }
}
export const getYoutubeLibraryLoaded = (state: { api: { libraryLoaded: any; }; }) => state.api.libraryLoaded;