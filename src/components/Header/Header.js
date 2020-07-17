import React, { useEffect, useState } from 'react';
import useRouter from '../../hooks/useRouter';
import { Link } from 'react-router-dom';
import { translate } from 'poke-i18n';
import useWindowSize from '../../hooks/useWindowSize';
import ModalTypeNav from '../TypeNav/ModalTypeNav';
import ModalFavoriteList from '../FavoritesList/ModalFavoriteList';
import './Header.css';

const t = translate(['favorite']);

const Header = () => {
  const [showHandles, setShowHandles] = useState(false);
  const { routeMatch } = useRouter();
  const size = useWindowSize();
  const match = routeMatch('/type/:type');

  const type = match?.params?.type;

  useEffect(() => {
    setShowHandles(size.width < 951);
  }, [size.width]);

  return (
    <header className={`app-header ${!type ? 'border-less' : ''}`}>
      <div
        className={`header-grid-1 ph2 flex ${
          showHandles ? 'items-center justify-between' : 'flex-center'
        }`}>
        {showHandles && <ModalTypeNav />}
        <div>
          <Link to="/">Pokedex</Link>
        </div>
        {showHandles && <ModalFavoriteList />}
      </div>
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
