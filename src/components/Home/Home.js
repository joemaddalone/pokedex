import React from 'react';
import { translate } from 'poke-i18n';
import './Home.css';

const t = translate(['home']);

const Home = () => (
  <div className="home flex flex-center">
    <h2>{t('welcome')}</h2>
  </div>
);

export default Home;
