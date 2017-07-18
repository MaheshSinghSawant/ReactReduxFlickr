import axios from 'axios';
export const FETCH_DATA = 'FETCH_DATA';
const API_KEY = '00b66724737e6a7b35b1667bc27125d9';
const ROOT_URL = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}`;

export function getImages(searchterm){

  const url = ROOT_URL + '&tags=' + searchterm +'&safe_search=1&per_page=20&format=json&nojsoncallback=?';
  const request = axios.get(url);
  
  return{
    type: FETCH_DATA,
    payload: request
  }
}
