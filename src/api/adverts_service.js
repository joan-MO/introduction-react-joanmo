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
  return client.post(url, advert);
      
};

export const deleteAdvert = advertId => {
  const url = `${api_url}/v1/adverts/${advertId}`;
  return client.delete(url);
};

export const getTags = () => {
  const url = `${api_url}/v1/adverts/tags`;
  return client.get(url);
};
