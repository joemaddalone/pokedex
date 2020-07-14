import { atom } from 'recoil';

const cachedFavorites = localStorage.getItem('pokemon-favorites');

export const favorites = atom({
  key: 'favorites',
  default: cachedFavorites ? JSON.parse(cachedFavorites) : [],
});

export const sidebarOpen = atom({
  key: 'sidebarOpen',
  default: false,
});
