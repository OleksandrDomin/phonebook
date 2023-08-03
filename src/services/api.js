import axios from 'axios';

const phoneBookAPI = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setToken = token => {
  phoneBookAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const unsetToken = () => {
  phoneBookAPI.defaults.headers.common.Authorization = '';
};

export const signUp = async user => {
  const { data } = await phoneBookAPI.post('/users/signup', user);
  setToken(data.token);
  return data;
};

export const logIn = async user => {
  const { data } = await phoneBookAPI.post('/users/login', user);
  setToken(data.token);
  return data;
};

export const logOut = async () => {
  await phoneBookAPI.post('/users/logout');
  unsetToken();
};

export const fetchCurrentUser = async () => {
  const { data } = await phoneBookAPI.get('/users/current');
  return data;
};

export const fetchContacts = async () => {
  const { data } = await phoneBookAPI.get('/contacts');
  return data;
};

export const addContact = async newContact => {
  const { data } = await phoneBookAPI.post('/contacts', newContact);
  return data;
};

export const deleteContact = id => phoneBookAPI.delete(`/contacts/${id}`);
