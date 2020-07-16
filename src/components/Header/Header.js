import React from 'react';
import useRouter from '../../hooks/useRouter';
import HeaderTypeNav from './HeaderTypeNav';
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
        <div className="static-header">{type}</div>
        <div className="nav-header">
          <HeaderTypeNav currentType={type} />
        </div>
      </div>
      <div className="header-grid-3 flex flex-center">{t('myFavorites')}</div>
    </header>
  );
};

export default Header;
