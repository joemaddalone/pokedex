import { useRecoilState } from 'recoil';
import { favorites } from './atoms';

const cloneIndex = (items, id) => ({
  clone: items.map((item) => ({ ...item })),
  index: items.findIndex((item) => item.id === id),
});

const cacheFavorites = (favs) => {
  localStorage.setItem('pokemon-favorites', JSON.stringify(favs));
};

export const useAddFavorite = () => {
  const [favs, setFavs] = useRecoilState(favorites);
  return (favorite) => {
    const { clone, index } = cloneIndex(favs, favorite.id);
    if (index !== -1) {
      // The favorite is already in the list.
      // Let's consider a notification to the user that this is the case.
      return;
    } else {
      const updatedFavorites = [...clone, { ...favorite }];
      setFavs(updatedFavorites);
      cacheFavorites(updatedFavorites);
    }
  };
};

export const useRemoveFavorite = () => {
  const [favs, setFavs] = useRecoilState(favorites);
  return (favorite) => {
    const updatedFavorites = favs.filter((fav) => fav.id !== favorite.id);
    setFavs(updatedFavorites);
    cacheFavorites(updatedFavorites);
  };
};
