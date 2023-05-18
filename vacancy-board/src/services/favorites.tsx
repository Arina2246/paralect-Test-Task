import { FAVORITES_LOCALSTORAGE } from '../constants/favorites';
import { Vacancy } from '../types/vacansy';

export const addFavorites = (vacancy: Vacancy) => {
  const favorites = getFavorites();
  if (!favorites) {
    localStorage.setItem(FAVORITES_LOCALSTORAGE, JSON.stringify([vacancy]));
  } else {
    localStorage.setItem(
      FAVORITES_LOCALSTORAGE,
      JSON.stringify([...favorites, vacancy])
    );
  }
};

export const removeFavorites = (id: string) => {
  const favorites = getFavorites() as Vacancy[];
  localStorage.removeItem(FAVORITES_LOCALSTORAGE);
  const clearFavorites = favorites.filter((vacancy) => vacancy.id !== id);
  localStorage.setItem(FAVORITES_LOCALSTORAGE, JSON.stringify(clearFavorites));
};

export const getFavorites = () => {
  const favorites = localStorage.getItem(FAVORITES_LOCALSTORAGE);
  if (favorites) {
    return JSON.parse(favorites);
  } else {
    return null;
  }
};

export const checkFavorite = (id: string) => {
  const favorites = getFavorites() as Vacancy[];
  if (favorites && favorites.length) {
    const favorite = favorites.filter((vacancy) => vacancy.id === id);
    return favorite.length > 0;
  } else {
    return false;
  }
};
