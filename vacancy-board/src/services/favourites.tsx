import { FAVOURITES_LOCALSTORAGE } from '../constants/favourites';
import { Vacancy } from '../types/vacansy';

export function addFavourites(vacancy: Vacancy) {
  const favourites = getFavourites();
  if (!favourites) {
    localStorage.setItem(FAVOURITES_LOCALSTORAGE, JSON.stringify([vacancy]));
  } else {
    localStorage.setItem(
      FAVOURITES_LOCALSTORAGE,
      JSON.stringify([...favourites, vacancy])
    );
  }
}

export function removeFavourites(id: string) {
  const favourites = getFavourites() as Vacancy[];
  localStorage.removeItem(FAVOURITES_LOCALSTORAGE);
  const clearFavourites = favourites.filter((vacancy) => vacancy.id !== id);
  localStorage.setItem(
    FAVOURITES_LOCALSTORAGE,
    JSON.stringify(clearFavourites)
  );
}

export function getFavourites() {
  const favourites = localStorage.getItem(FAVOURITES_LOCALSTORAGE);
  if (favourites) {
    return JSON.parse(favourites);
  } else {
    return null;
  }
}

export function checkFavourite(id: string) {
  const favourites = getFavourites() as Vacancy[];
  if (favourites && favourites.length) {
    const favourite = favourites.filter((vacancy) => vacancy.id === id);
    if (favourite.length) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
