import client, { configureClient, resetClient } from './client';
import storage from '../utils/storage';

export const login = credentials => {
    console.log(credentials);
    return client.post('/api/auth/login', credentials).then(({ accessToken }) => {
    configureClient({ accessToken });
      if (credentials.checked === true) {
        storage.set('auth', accessToken);
      } else {
        storage.set('auth', accessToken);
        setTimeout(() => {
          storage.remove('auth')
          window.location = '/login';
        }, 5000);
    }
  });
};





export const logout = () => {
  return Promise.resolve().then(() => {
    resetClient();
    storage.remove('auth');
  });
};
