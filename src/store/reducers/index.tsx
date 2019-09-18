import apiReducer from './api';
import { combineReducers } from 'redux';
import videosReducer from './video'

export default combineReducers({
  api: apiReducer,
  videos: videosReducer
});
// export function (state = {}, action) {
//   switch (action.type) {
//     default:
//       return state;
//   }
// }