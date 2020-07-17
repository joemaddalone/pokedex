import React from 'react';
import useRouter from '../../hooks/useRouter';
import { translate } from 'poke-i18n';
import './Header.css';

const t = translate(['favorite']);

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
      <div className="header-grid-3 flex flex-center">{t('myFavorites')}</div>
    </header>
  );
};

export default Header;
