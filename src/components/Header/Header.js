import React from 'react';
import FavoriteTrigger from './FavoriteTrigger';

const Header = () => {
  return (
    <header className="app-header flex justify-between items-center">
      <div>Pokedex</div>
      <div>
        <FavoriteTrigger />
      </div>
    </header>
  );
};

export default Header;
