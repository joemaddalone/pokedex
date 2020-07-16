import React from 'react';
import FavoriteTrigger from './FavoriteTrigger';
import useRouter from '../../hooks/useRouter';
import './Header.css';

const Header = () => {
  const { routeMatch } = useRouter();
  const match = routeMatch('/type/:type');

  const type = match?.params?.type;

  return (
    <header className={`app-header ${!type ? 'border-less' : ''}`}>
      <div className="header-grid-1 flex flex-center">Pokedex</div>
      <div
        className={`header-grid-2 flex flex-center ttc ${
          !type ? 'borderless' : ''
        }`}>
        {type}
      </div>
      <div className="header-grid-3 flex flex-center">
        My Favourites
        {/* <FavoriteTrigger /> */}
      </div>
    </header>
  );
};

export default Header;
