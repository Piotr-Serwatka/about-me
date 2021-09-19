import axios from 'axios';

const BASE_URL = 'https://api.nasa.gov';
const API_KEY = 'pXCSvddxBDYaUhf79cgGxABKoprmdYXZnhVfpCjF';

const buildGetParams = params => ({ params: { api_key: API_KEY, ...params}});

export default {
  getMarsPhotosData() {
    return axios.get(
      `${BASE_URL}/mars-photos/api/v1/rovers/curiosity/photos`,
      buildGetParams({sol: 1000})
    );
  },

  getPictureOfTheDay(){
    return axios.get(`${BASE_URL}/planetary/apod`, buildGetParams())
  }
}
