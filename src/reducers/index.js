import { combineReducers } from 'redux';
import FlickrReducer from './reducer-flickr';
const rootReducer = combineReducers({
  picsData:FlickrReducer
});

export default rootReducer;
