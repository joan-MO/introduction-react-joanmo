import client from './client'

const api_url = '/api';

export const getAll = () => {
  const url = `${api_url}/v1/adverts`;
  return client.get(url);
};

export const getAdvertById = advertId=> {
  const url = `${api_url}/v1/adverts/${advertId}`;
  return client.get(url);
};

export const createAdvert = advert => {

  const url = `${api_url}/v1/adverts`;
  const file = new Blob([advert.photo], { type: 'multipart/form-data' });
  const data = new FormData();

  if (advert.photo) {
    data.append('photo', file);
  }
  
  data.append('name', advert.name);
  data.append('sale', advert.sale);
  data.append('price', advert.price);
  data.append('tags', advert.tags);

  return client.post(url, data);
      
};

/*
export const createLike = tweetId => {
  const url = `${tweetsBaseUrl}/tweets/${tweetId}/likes`;
  return client.post(url);
};
*/
export const deleteAdvert = advertId => {
  const url = `${api_url}/v1/adverts/${advertId}`;
  return client.delete(url);
};

export const getTags = () => {
  const url = `${api_url}/v1/adverts/tags`;
  return client.get(url);
};
