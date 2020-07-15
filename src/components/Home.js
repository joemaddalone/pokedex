import React from 'react';
import EmptyState from './common/EmptyState';
import { translate } from 'poke-i18n';

const t = translate(['home']);

const Home = () => (
  <EmptyState>
    <h2>{t('welcome')}</h2>
  </EmptyState>
);

export default Home;
