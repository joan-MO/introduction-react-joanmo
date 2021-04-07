import client from './client'

const api_url = '/api';

export const getAll = (query = null) => {
  let url = `${api_url}/v1/adverts`;
 
  if (query) {
    return client.get(url, { params: query })
  }
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
