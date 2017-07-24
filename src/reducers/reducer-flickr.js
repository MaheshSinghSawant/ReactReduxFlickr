import {FETCH_DATA}  from '../actions/index';

export default function(state=[],action){
  switch(action.type){
    case FETCH_DATA:
      if(action.payload.data)
        return action.payload.data.photos.photo;

  }
  return state;
}
