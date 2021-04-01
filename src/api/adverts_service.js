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

/*

export const createTweet = tweet => {
  const url = `${tweetsBaseUrl}/tweets`;
  return client.post(url, tweet);
};

export const createLike = tweetId => {
  const url = `${tweetsBaseUrl}/tweets/${tweetId}/likes`;
  return client.post(url);
};
*/
export const deleteAdvert = advertId => {
  const url = `${api_url}/v1/adverts/${advertId}`;
  return client.delete(url);
};
